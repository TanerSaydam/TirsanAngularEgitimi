import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { api } from 'src/app/const/apiUrl';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.css']
})
export class LockComponent {
  nameOrEmail: string = "";
  
  constructor(
    private router: Router,
    private http: HttpService,
    private auth: AuthService
  ) {
    const name:any = localStorage.getItem("emailOrUserName");
    if(name === null)
      router.navigateByUrl("/login");
    
    this.nameOrEmail = name;
  }

  signIn(form: NgForm){
    if(form.valid){
      const data = {
        emailOrUserName: this.nameOrEmail,
        rememberMe: form.controls["rememberMe"].value,
        password: form.controls["password"].value
      }     

      if(data.rememberMe === "")
        data.rememberMe = false;

      this.auth.login(data);
    }
  }
}
