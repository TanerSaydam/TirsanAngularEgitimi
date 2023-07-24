import { Component, ViewEncapsulation } from '@angular/core';
import {Todo} from './todo.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  //name:string = "Tugay Saydam";
  // work:string = "";
  // isCompleted:boolean = false;
  todos:Todo[] = [];
  todo:Todo = new Todo();
  
  save(event: Todo){
    this.todo = {...event};
    this.todos.push(
      //{work:this.work, isCompleted: this.isCompleted}
      this.todo
    );
   // this.todo = new Todo();
    // this.work = "";   
    // this.isCompleted = false;
    //console.log(this.todos);
  }
}
