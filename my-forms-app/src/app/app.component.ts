import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <a 
    routerLink="/"
    routerLinkActive="active" 
    [routerLinkActiveOptions]="{exact:true}">
    Forms
  </a> || 
  <a 
    routerLink="/reactive-form" 
    routerLinkActive="active" 
    [routerLinkActiveOptions]="{exact:true}">
    Reactive Form
  </a> ||
  <a 
    routerLink="/ng-form"
    routerLinkActive="active" 
    [routerLinkActiveOptions]="{exact:true}">
    NgForm
  </a>
  <router-outlet></router-outlet>
  ` 
})
export class AppComponent {}
