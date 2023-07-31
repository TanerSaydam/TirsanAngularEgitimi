import { Component } from '@angular/core';
import { RoutesModel } from 'src/app/common/models/routes.model';
import { SettingModel } from 'src/app/common/models/setting.model';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {
  title: string = "Roles";
  routes: RoutesModel[] = [
    {name: 'Roles',link:'/roles', icon: ''}
  ];
  settings: SettingModel[] = [
    {name: 'Account security', link: '/', icon:'ph-shield-warning me-2'}
  ];
}
