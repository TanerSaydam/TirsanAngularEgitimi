import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoModel } from '../models/todo.model';
import { SwalService } from 'src/app/services/swal.service';
import { PaginationService } from 'src/app/services/pagination.service';
import { RequestModel } from '../models/request.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {  
  isCompletedSearch: boolean = true;  

  constructor(
    public todoService: TodoService,
    private swal: SwalService,
    public pagination: PaginationService
  ) {
    this.todoService.getAll();
  }

  removeById(id: number){
    this.swal.callSwal("Kaydı silmek istiyor musunuz?",(res)=> {
      if(res.isConfirmed) 
      this.todoService.removeById(id);
    });
  }

  getSearch(){
    this.todoService.getAll()
  }

  getPage(number: number){
    this.todoService.request.pageNumber = number;
    this.todoService.getAll();
  }

  get(todo: TodoModel){
    this.todoService.get(todo);
  }
}
