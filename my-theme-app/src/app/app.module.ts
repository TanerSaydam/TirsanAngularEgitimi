import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './routing/routes';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { ValidateDirective } from './directives/validate.directive';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/layout/navbar/navbar.component'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LockComponent } from './components/lock/lock.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { ProductsComponent } from './components/products/products.component';
import { RolesComponent } from './components/roles/roles.component';
import { BlankComponent } from './common/components/blank/blank.component';
import { CardComponent } from './common/components/card/card.component';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    SweetAlert2Module.forRoot({}),
    ToastrModule.forRoot({
      preventDuplicates: true,
      progressBar: true,
      positionClass: "toast-bottom-right",
      // iconClasses: {
      //   info: "text-dark"
      // }
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
