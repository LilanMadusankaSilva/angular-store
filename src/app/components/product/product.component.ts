import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state';
import * as ShoppingCartActions from './../../actions/shopping-cart.action';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {

  @Input() item: Product;

  constructor(private store: Store<AppState>) { }

  public async onAddItem(): Promise<void> {
    this.store.dispatch(new ShoppingCartActions.AddProduct(this.item));
  }

}
