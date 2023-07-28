import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { api } from 'src/app/const/apiUrl';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService){}

signIn(form: NgForm){
  if(form.valid){
    if(form.controls["rememberMe"].value === "")
      form.controls["rememberMe"].setValue(false);

    this.auth.login(form.value);
  }
}
}
