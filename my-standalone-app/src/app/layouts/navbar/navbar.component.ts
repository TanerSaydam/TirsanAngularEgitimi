import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from 'src/app/commons/commons.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
