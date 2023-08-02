import { LoginComponent } from '../components/login/login.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: "login",
      loadChildren: ()=> import("../components/login/login.module").then(m=> m.LoginModule),
      component: LoginComponent
    },
    {
      path: "",
      loadChildren: ()=> import("../components/layouts/layouts.module").then(m=> m.LayoutsModule),      
    }
  ]