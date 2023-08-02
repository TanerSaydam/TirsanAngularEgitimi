import { Component } from '@angular/core';
import { CommonsModule } from '../commons/commons.module';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [CommonsModule]
})
export default class ContactComponent {

}
