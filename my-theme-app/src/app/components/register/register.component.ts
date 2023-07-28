import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isPasswordMatch: boolean = false;
  termOfService: boolean = false;

  constructor(private auth: AuthService){}

  checkPassword(password: any, repeat: any) {
    if (password.validity.valid && repeat.validity.valid) {
      if (password.value != repeat.value) {
        password.classList.add("is-invalid")
        password.classList.remove("is-valid")
        repeat.classList.add("is-invalid")
        repeat.classList.remove("is-valid")
        this.isPasswordMatch = false;
      } else {
        password.classList.remove("is-invalid")
        password.classList.add("is-valid")
        repeat.classList.remove("is-invalid")
        repeat.classList.add("is-valid")
        this.isPasswordMatch = true;
      }
    }
  }

  signUp(form: NgForm){
    if(form.valid && this.isPasswordMatch && this.termOfService){
      this.auth.register(form.value);
    }
  }

}
