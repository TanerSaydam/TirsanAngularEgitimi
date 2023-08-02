import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppComponent } from './app/app.component';
import { ProductComponent } from './app/components/products/components/product/product.component';
import { HomeComponent } from './app/components/home/home.component';
import { AuthService } from './app/components/auth/services/auth.service';
import { inject, importProvidersFrom } from '@angular/core';
import { LayoutComponent } from './app/components/layout/layout.component';
import { provideRouter } from '@angular/router';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FormsModule),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter([
            {
                path: "login",
                loadComponent:()=> import("./app/components/auth/components/login/login.component").then(c=> c.LoginComponent)
            },
            {
                path: "",
                component: LayoutComponent,
                canActivateChild: [() => inject(AuthService).authorize()],
                children: [
                    {
                        path: "",
                        component: HomeComponent
                    },
                    {
                        path: "products",
                        component: ProductComponent
                    }
                ]
            }
        ])
    ]
})
  .catch(err => console.error(err));
