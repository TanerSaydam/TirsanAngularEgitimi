import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ValidateModule } from 'src/app/directives/validate.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ValidateModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
