import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { ValidateModule } from 'src/app/directives/validate.module';



@NgModule({
  declarations: [
    RegisterComponent,    
  ],
  imports: [
    CommonModule,
    ValidateModule,
    FormsModule,
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
