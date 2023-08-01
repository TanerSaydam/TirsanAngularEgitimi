import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: ()=> import("./home/home.module").then(m=> m.HomeModule)
  },
  {
    path: "about",
    loadChildren: ()=> import("./about/about.module").then(m=> m.AboutModule),
    component: AboutComponent
  },
  {
    path: "login",
    loadChildren: ()=> import("./login/login.module").then(m=> m.LoginModule),
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
