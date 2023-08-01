import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { BlankModule } from 'src/app/common/components/blank/blank.module';
import { CardModule } from 'src/app/common/components/card/card.module';
import { ValidateModule } from 'src/app/directives/validate.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductUpdateComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    BlankModule,
    FormsModule,
    ValidateModule,
    CardModule,
    RouterModule.forChild([
      {
        path: "",
        component: ProductsComponent
      },
      {
        path: ":value",
        component: ProductUpdateComponent
      }
    ])
  ],
  exports: [
    ProductsComponent,
    ProductUpdateComponent
  ]
})
export class ProductsModule { }
