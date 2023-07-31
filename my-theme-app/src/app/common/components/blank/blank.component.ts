import { Component, Input } from '@angular/core';
import { RoutesModel } from '../../models/routes.model';
import { SettingModel } from '../../models/setting.model';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent {
  @Input({required:true}) title: string = "";
  @Input() routes: RoutesModel[] = [];
  @Input() settings: SettingModel[] = [];
}
