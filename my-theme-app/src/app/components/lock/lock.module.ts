import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LockComponent } from './lock.component';
import { FormsModule } from '@angular/forms';
import { ValidateModule } from 'src/app/directives/validate.module';



@NgModule({
  declarations: [
    LockComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ValidateModule
  ],
  exports: [
    LockComponent
  ]
})
export class LockModule { }
