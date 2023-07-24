import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MyFirstComponent } from './my-first/my-first.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    TodoListComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
