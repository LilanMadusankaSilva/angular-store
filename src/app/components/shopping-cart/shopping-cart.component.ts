
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { AppState } from 'src/app/app-state';
import { Product } from 'src/app/models/product.model';
import { ShoppingCart } from 'src/app/models/shopping-cart.model';
import * as ShoppingCartActions from './../../actions/shopping-cart.action';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent {

  shoppingCart: ShoppingCart;

  constructor(private store: Store<AppState>) {
    store.select('shoppingCartStore').subscribe((data: any) => {
      this.shoppingCart = data as any;
    });
  }

  public async onAddQuantity(item: Product): Promise<void> {
    this.store.dispatch(new ShoppingCartActions.AddProduct(item));
  }

  public async onSubtractQuantity(item: Product): Promise<void> {
    this.store.dispatch(new ShoppingCartActions.RemoveProduct(item, false));
  }

  public async onRemoveItem(item: Product): Promise<void> {
    this.store.dispatch(new ShoppingCartActions.RemoveProduct(item, true));
  }

}
