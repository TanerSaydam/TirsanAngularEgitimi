import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonsModule } from '../commons/commons.module';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css'],
  standalone: true,
  imports: [CommonsModule,NavbarComponent]
})
export default class LayoutsComponent {

}
