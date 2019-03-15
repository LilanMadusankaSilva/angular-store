
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { AppState } from './../../app-state';
import { ShoppingCart } from './../../models/shopping-cart.model';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html'
})
export class HeaderBarComponent {

  shoppingCart: ShoppingCart;

  constructor(private store: Store<AppState>) {
    store.select('shoppingCartStore').subscribe((data: any) => {
      this.shoppingCart = data as any;
    });
  }
}
