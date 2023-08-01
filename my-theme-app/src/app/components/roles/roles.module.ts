import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import { CardModule } from 'src/app/common/components/card/card.module';
import { BlankModule } from 'src/app/common/components/blank/blank.module';



@NgModule({
  declarations: [
    RolesComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    BlankModule
  ],
  exports: [
    RolesComponent
  ]
})
export class RolesModule { }
