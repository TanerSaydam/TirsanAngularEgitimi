import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { NavbarModule } from './navbar/navbar.module';



@NgModule({
  declarations: [
    LayoutsComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule.forChild([
      {
        path: "",
        component: LayoutsComponent,
        children: [
          {
            path: "",
            loadChildren: () => import("../home/home.module").then(m => m.HomeModule),
          },
          {
            path: "about",
            loadChildren: () => import("../about/about.module").then(m => m.AboutModule),
          },
          {
            path: "contact",
            loadChildren: () => import("../contact/contact.module").then(m => m.ContactModule),
            component: ContactComponent
          },
        ]
      }
    ])
  ]
})
export class LayoutsModule { }
