import { Component } from '@angular/core';
import { LoginModel } from '../../models/login.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: LoginModel = new LoginModel();

  constructor(
    private auth: AuthService
  ){}

  login(){    
    this.auth.login(this.model);
  }

}
