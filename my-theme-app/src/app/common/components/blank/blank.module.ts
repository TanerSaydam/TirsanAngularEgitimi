import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankComponent } from './blank.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BlankComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BlankComponent
  ]
})
export class BlankModule { }
