import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';
import { RolesComponent } from '../roles/roles.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: LayoutComponent,
        children: [
          {
            path: "",
            loadChildren: () => import("../home/home.module").then(m => m.HomeModule),
            component: HomeComponent
          },
          {
            path: "products",
            loadChildren: () => import("../products/products.module").then(m => m.ProductsModule),
          },
          {
            path: "roles",
            loadChildren: () => import("../roles/roles.module").then(m => m.RolesModule),
            component: RolesComponent
          }
        ]
      }

    ]

    )
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
