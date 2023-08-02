import { HttpClient } from '@angular/common/http';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',  
  template:`
  <button (click)="getAll()">Listeyi çek</button>
  <button (click)="reset()">Listeyi Sıfırla</button>
  <ul>
    <li *ngFor="let t of todos()">
      {{t.title}}
    </li>
  </ul>
  <!-- <h1>{{count()}}</h1>
  <h1>{{newCount()}}</h1>
<button (click)="increment()">+</button>
<button (click)="decrement()">-</button>  
<ul>
  <li *ngFor="let r of result()">{{r}}</li>
</ul> -->
  `
})
export class AppComponent {

  todos = signal<any>([])
constructor(
  private http:HttpClient
){
 
}

getAll(){
  this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(res=> {
    this.todos.set(res);
  })
}

reset(){
  this.todos.set([]);
}

  // count = signal<number>(0);
  // newCount = computed(()=> this.count() * 2)
  // result = signal<string[]>([]);

  // increment(){
  //   //set update mutated
  //   this.count.set(1);
  //   this.count.update(val=> val +1);
    
  //   //this.newCount = this.count() * 2;

  //   this.result.mutate(val => this.result().push("increment"));
  // }

  // decrement(){
  //   this.count.update(val=> val -1);
  //   //this.newCount = this.count() * 2;

  //   this.result.mutate(val => this.result().push("decrement"));
  // }
}
