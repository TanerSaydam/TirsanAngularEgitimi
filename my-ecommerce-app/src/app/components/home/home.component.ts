import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { api } from 'src/app/statics/apiUrl';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [FormsModule]
})
export class HomeComponent {
  constructor(
    private http: HttpService
  ){
    this.http.get(`${api}/products/getAll`,(res)=> {
      console.log(res);
    })
  }
}
