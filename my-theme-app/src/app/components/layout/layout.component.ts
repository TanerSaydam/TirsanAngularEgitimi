import { Component } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { api } from 'src/app/const/apiUrl';
import { RoleModel } from 'src/app/models/role.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  roles: RoleModel[] = []

  constructor(
    private http: HttpService
  ){
    const responseString = localStorage.getItem("response")
    if(responseString !== null){
      const response = JSON.parse(localStorage.getItem("response"));
      const jwt:any = jwtDecode(response.token);      
      this.http.get(`${api}/Users/GetRoles/${jwt["id"]}`,(res)=> {
        this.roles = res;
        localStorage.setItem("roles",JSON.stringify(this.roles));
      })

    }
  }

  setTheme(color: string){    
    localStorage.setItem("theme",color);
    const element:any = document.querySelector("body");
    element.dataset["colorTheme"] = color;
  }
}
