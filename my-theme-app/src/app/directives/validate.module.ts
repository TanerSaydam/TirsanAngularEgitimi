import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateDirective } from './validate.directive';



@NgModule({
  declarations: [
    ValidateDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ValidateDirective
  ]
})
export class ValidateModule { }
