import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:SocialUser;
  loggedIn:boolean;
  
constructor(
  private social: SocialAuthService
){
  this.social.authState.subscribe(res=> {
    console.log(res);
    this.user = res;
    this.loggedIn = (this.user != null);
  })
}
}
