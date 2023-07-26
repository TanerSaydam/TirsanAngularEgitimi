import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoModel } from './models/todo.model';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from '../services/error.service';
import { GenericHttpService } from '../services/generic-http.service';
import { PaginationService } from '../services/pagination.service';
import { RequestModel } from './models/request.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo: TodoModel = new TodoModel();
  result: any;
  isAddButtonActive: Boolean = true;
  apiUrl: string = "https://localhost:7164/api/Todos"
  pageNumbers: number[] = [];
  request: RequestModel = new RequestModel();

  constructor(
    private http: GenericHttpService,
    private toastr: ToastrService,
    private error: ErrorService,
    private pagination: PaginationService
  ) {
    
  }

  getAll(){
    this.http.post(`${this.apiUrl}/GetAll`,this.request, (res)=> {
      this.result = res;
      this.pageNumbers = this.pagination.setPageNumbers(this.result.pageNumber,this.result.totalPages)
    });
  }

  save(){
    this.http.post(`${this.apiUrl}/Add`,{work: this.todo.work},(res)=> {
      this.getAll(); 
      this.todo = new TodoModel();
      this.toastr.success(res.message);
    });   
  }

  get(todo: TodoModel){
    this.todo = {...todo};
    this.todo.isCompleted = true;
    this.isAddButtonActive = false;
  }

  cancel(){
    this.todo = new TodoModel();
    this.isAddButtonActive = true;
  }

  update(){
    this.http.post(`${this.apiUrl}/Update`, this.todo, (res)=> {
      this.getAll();
      this.cancel();
      this.toastr.info(res.message);
    })   
  }

  removeById(id: number){
    this.http.get<Response>(`${this.apiUrl}/RemoveById/${id}`, (res)=> {
      this.getAll();
        this.toastr.error(res.message);
    });   
  }

  changeIsCompletedById(id: number){
    this.http.get<Response>(`${this.apiUrl}/ChangeIsCompletedById/${id}`,(res)=> {
      this.getAll();
      this.toastr.info(res.message);
    });
    }
}


class Response{
  message: string = "";
}
