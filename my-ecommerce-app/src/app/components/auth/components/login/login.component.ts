import { Component } from '@angular/core';
import { LoginModel } from '../../models/login.model';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
    imports: [FormsModule]
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
