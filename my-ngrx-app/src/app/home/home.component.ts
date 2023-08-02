import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment } from '../count-reducer/counter.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  count$: Observable<number>;
  constructor(
    public shoppingCart: ShoppingCartService,
    private store: Store<{count: number}>
  ){}

  incrementCount(){
    //this.shoppingCart.count += 1;
    this.store.dispatch(increment());
  }
}
