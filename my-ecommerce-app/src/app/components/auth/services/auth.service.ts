import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { LoginModel } from '../models/login.model';
import { api } from 'src/app/statics/apiUrl';
import { LoginResponseModel } from '../models/login-response.model';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpService,
    private router: Router
  ) { }

  authorize(){    
    let response = localStorage.getItem("response");
    if(response === null)
      this.router.navigate(["login"]);
    else{
      let loginResponse: LoginResponseModel = JSON.parse(response);
      let token:string = loginResponse.token;
      let decode:any = jwtDecode(token);
      let time = new Date().getTime() / 1000;

      if(decode.exp > time){

      }else{
        this.router.navigateByUrl("/login");
      }     
    }
  }

  login(model: LoginModel){    
    this.http.loginPost(`${api}/auth/login`,model,(res:LoginResponseModel)=> {
      localStorage.setItem("response",JSON.stringify(res));
      this.router.navigateByUrl("/");
    })
  }  
}
