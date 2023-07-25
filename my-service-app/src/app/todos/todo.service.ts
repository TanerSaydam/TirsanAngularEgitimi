import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todo: string = "";
  todos: any[] = [];

  constructor(
    private http: HttpClient
  ) {
    
  }

  getAll(){
    this.http.get("https://localhost:7164/api/Todos/GetAll").subscribe({
      next: (res:any)=> this.todos = res,
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    })
  }

  save(){
    this.http.post("https://localhost:7164/api/Todos/Add", {work: this.todo})
    .subscribe({
      next: (res:any)=> {
        console.log(res); 
        this.getAll(); 
        this.todo = "";
      } ,
      error: (err: HttpErrorResponse) => console.log(err)
    })
  }
}
