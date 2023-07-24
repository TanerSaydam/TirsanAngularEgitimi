import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
 @Output() myEvent = new EventEmitter();
 todo: Todo = new Todo();


  save(){
    this.myEvent.emit(this.todo);
    this.todo = new Todo();
  }
}
