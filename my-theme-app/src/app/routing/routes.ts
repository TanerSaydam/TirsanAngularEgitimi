import { Routes } from "@angular/router";
import { LayoutComponent } from "../components/layout/layout.component";
import { HomeComponent } from "../components/home/home.component";
import { LoginComponent } from "../components/login/login.component";
import { NotFoundComponent } from "../components/not-found/not-found.component";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { LockComponent } from "../components/lock/lock.component";
import { RegisterComponent } from "../components/register/register.component";
import { combineLatest } from "rxjs";
import { ProductsComponent } from "../components/products/products.component";
import { RolesComponent } from "../components/roles/roles.component";
import { ProductUpdateComponent } from "../components/products/product-update/product-update.component";

export const routes: Routes = [
    {
        path: "register",
        loadChildren: ()=> import ("../components/register/register.module").then(m=> m.RegisterModule),
        component: RegisterComponent
    },
    {
        path: "login",
        loadChildren: ()=> import ("../components/login/login.module").then(m=> m.LoginModule),
        component: LoginComponent
    },
    {
        path: "lock",
        loadChildren: ()=> import ("../components/lock/lock.module").then(m=> m.LockModule),
        component: LockComponent
    },
    {
        path: "",        
        loadChildren: ()=> import ("../components/layout/layout.module").then(m=> m.LayoutModule),
        canActivateChild: [()=> inject(AuthService).isAuthenticated()],        
    },
    {
        path: "**",
        loadChildren: ()=> import ("../components/not-found/not-found.module").then(m=> m.NotFoundModule),
        component: NotFoundComponent
    }
]