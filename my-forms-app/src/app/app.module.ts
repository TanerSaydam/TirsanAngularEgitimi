import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyRoutingModule } from './my-routing/my-routing.module';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgFormsComponent } from './ng-forms/ng-forms.component';
import { ValidationDirective } from './validation.directive';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ReactiveFormsComponent,
    NgFormsComponent,
    ValidationDirective
  ],
  imports: [
    BrowserModule,
    MyRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
