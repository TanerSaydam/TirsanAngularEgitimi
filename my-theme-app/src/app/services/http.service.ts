import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from './error.service';
import { LoginResponseModel } from '../models/login.response.model';
import jwtDecode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { api } from '../const/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private error: ErrorService,
    private toastr: ToastrService
  ) { }

  authPost(api: string, data: any, callBack:(res:any)=> void){
    this.http.post(api,data).subscribe({
      next: (res: any)=> {
        callBack(res)
      },
      error: (err: HttpErrorResponse)=> {
        console.log(err);
        this.error.errorHandler(err);
      }
    })
  }

  get(api: string, callBack:(res:any)=> void){
    const result = this.checkToken();
    if(result){
      const response = localStorage.getItem("response");
      const responseModel: LoginResponseModel = JSON.parse(response);
      
      this.http.get(api, {
        headers: {
          "Authorization": "Bearer " + responseModel.token
        }
      }).subscribe({
        next: (res: any)=> {
          callBack(res)
        },
        error: (err: HttpErrorResponse)=> {
          console.log(err);
          this.error.errorHandler(err);
        }
      });
    }else{
      this.router.navigateByUrl("/lock");
      this.toastr.error("Oturum süreniz dolmuş! Tekrar giriş yapmalısınız!");
    }
    
  }

  post(api: string, data: any, callBack:(res:any)=> void){
    const result = this.checkToken();
    if(result){
      const response = localStorage.getItem("response");
      const responseModel: LoginResponseModel = JSON.parse(response);
      
      this.http.post(api,data, {
        headers: {
          "Authorization": "Bearer " + responseModel.token
        }
      }).subscribe({
        next: (res: any)=> {
          callBack(res)
        },
        error: (err: HttpErrorResponse)=> {
          console.log(err);
          this.error.errorHandler(err);
        }
      });
    }else{
      this.router.navigateByUrl("/lock");
      this.toastr.error("Oturum süreniz dolmuş! Tekrar giriş yapmalısınız!");
    }
    
  }

  checkToken(){
    const response = localStorage.getItem("response");
    if(response === null) return false;
    else{
      const responseModel: LoginResponseModel = JSON.parse(response);
      const decode: any = jwtDecode(responseModel.token);
      const time = new Date().getTime() / 1000;
      if(decode.exp >= time){
        return true;
      }else{
        const refreshTokenExpires = new Date(responseModel.refreshTokenExpires).getTime() / 1000;
        if(refreshTokenExpires >= time){
          this.authPost(`${api}/Auth/LoginByRefreshToken`, {refreshToken: responseModel.refreshToken},(res:any)=> {
            localStorage.setItem("response",JSON.stringify(res));
            return this.checkToken();
          })
        }else{
          return false
        }
      }
      return false;
    }

  }


}
