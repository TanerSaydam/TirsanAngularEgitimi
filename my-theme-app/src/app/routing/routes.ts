import { Routes } from "@angular/router";
import { LayoutComponent } from "../components/layout/layout.component";
import { HomeComponent } from "../components/home/home.component";
import { LoginComponent } from "../components/login/login.component";
import { NotFoundComponent } from "../components/not-found/not-found.component";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { LockComponent } from "../components/lock/lock.component";
import { RegisterComponent } from "../components/register/register.component";

export const routes: Routes = [
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "lock",
        component: LockComponent
    },
    {
        path: "",
        component: LayoutComponent,
        canActivateChild: [()=> inject(AuthService).isAuthenticated()],
        children: [
            {
                path: "",
                component: HomeComponent
            }
        ]
    },
    {
        path: "**",
        component: NotFoundComponent
    }
]