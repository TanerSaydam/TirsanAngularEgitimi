import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor() { }

  test(){
    console.log("mylibraray is work!");
  }
}
