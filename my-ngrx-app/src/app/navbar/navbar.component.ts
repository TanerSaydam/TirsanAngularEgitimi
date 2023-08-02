import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  count$: Observable<number>;
  constructor(
    private store: Store<{count: number}>,
    public shoppingCart: ShoppingCartService
    ) {
    this.count$ = this.store.select("count");
  }
}
