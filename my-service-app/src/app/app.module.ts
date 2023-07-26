import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { TodoAddComponent } from './todos/todo-add/todo-add.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodosComponent } from './todos/todos.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TodoPipe } from './todos/todo.pipe';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoAddComponent,
    TodoListComponent,    
    TodoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DataTablesModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot({
      progressBar: true,
      closeButton: true,
      preventDuplicates: true,
      timeOut: 3000,
      positionClass: "toast-bottom-right"
    }),
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "",
        component: TodosComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
