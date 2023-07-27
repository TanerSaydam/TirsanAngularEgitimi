import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponseModel } from '../components/auth/models/login-response.model';
import jwtDecode from 'jwt-decode';
import { api } from '../statics/apiUrl';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  post(api: string, data:any, callBack: (res:any)=> void){
    const result = this.checkToken();
    if(result){
      const responseString:any = localStorage.getItem("response");
      const response:LoginResponseModel = JSON.parse(responseString);
      this.http.post(api,data,{headers: {"authorization": "Bearer " + response.token}})
      .subscribe({
        next: (res:any)=> {
          callBack(res);
        },
        error: (err:HttpErrorResponse)=> {
          console.log(err);
        }
      })
    }else{
      this.router.navigateByUrl("/login");
    }    
  }

  get(api: string, callBack: (res:any)=> void){
    const result = this.checkToken();
    if(result){
      const responseString:any = localStorage.getItem("response");
      const response:LoginResponseModel = JSON.parse(responseString);
      this.http.get(api,{headers: {"authorization": "Bearer " + response.token}})
      .subscribe({
        next: (res:any)=> {
          callBack(res);
        },
        error: (err:HttpErrorResponse)=> {
          console.log(err);
        }
      })
    }else{
      this.router.navigate(["login"]);
    }
    
  }

  loginPost(api:string, data:any,callBack:(res:any)=> void){    
    this.http.post(api,data)
      .subscribe({
        next: (res:any)=> {
          callBack(res);
        },
        error: (err:HttpErrorResponse)=> {
          console.log(err);
        }
    })
  }

  checkToken(){    
    let response = localStorage.getItem("response");
    if(response === null)
      return false;
    else{
      let loginResponse: LoginResponseModel = JSON.parse(response);
      const token:string = loginResponse.token;
      const decode:any = jwtDecode(token);
      const time = new Date().getTime() / 1000;
            
      if(decode.exp > time){
        return true;
      }else{
        const refreshTokenExpires = new Date(loginResponse.refreshTokenExpires).getTime() / 1000;
        if(refreshTokenExpires >= time){
          this.post(`${api}/auth/GetNewTokenByRefreshToken`,{refreshToken:loginResponse.refreshToken},(res:any)=> {
            localStorage.setItem("response",JSON.stringify(res));
            return this.checkToken();
          });
        }else{
          return false;
        }
        return false;
      }     
    }
  } 
}
