import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SwalService } from './swal.service';
import jwtDecode from 'jwt-decode';
import { HttpService } from './http.service';
import { api } from '../const/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private roter: Router,
    private swal: SwalService,
    private http: HttpService,
    private router: Router
  ) { }

  isAuthenticated(){
    let response = localStorage.getItem("response");
    if(response === null){
      this.roter.navigateByUrl("/lock");
      this.swal.callToast("Tekrar giriş yapmalısınız!","","error");
      return;
    }

    const loginResponse = JSON.parse(response);
    const token:string = loginResponse.token;
    const decode:any = jwtDecode(token);
    const time = new Date().getTime() / 1000;

    if(decode.exp < time){
      this.roter.navigateByUrl("/lock");
      this.swal.callToast("Tekrar giriş yapmalısınız!","","error");
    }
  }

  login(data: any){
    this.http.authPost(`${api}/Auth/Login`,data,(res:any)=> {
      localStorage.setItem("response", JSON.stringify(res));
      localStorage.setItem("emailOrUserName",data["emailOrUserName"])
      this.router.navigateByUrl("/");
    })
  }

  register(data:any){
    this.http.authPost(`${api}/Auth/Register`,data,(res:any)=> {
      localStorage.setItem("response", JSON.stringify(res));
      localStorage.setItem("emailOrUserName",data["email"])
      this.router.navigateByUrl("/");
    })
  }
}
