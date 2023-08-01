import { Component } from '@angular/core';
import { RouteModel } from 'src/app/common/models/route.model';
import { routeList } from 'src/app/const/route';
import { RoleModel } from 'src/app/models/role.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  routes: RouteModel[] = [];
  roles: RoleModel[] = [];

  constructor(){
    if(localStorage.getItem("roles")){
      const roleList = JSON.parse(localStorage.getItem("roles")) as RoleModel[];
      this.roles = roleList.filter(p=> p.title === "Menü");
       this.routes = routeList;
    }    
  }

  checkRole(routeName: string){
    const result = this.roles.findIndex(p=> p.name === routeName);    
    if(result >= 0) return true
    else return false
  }
}
