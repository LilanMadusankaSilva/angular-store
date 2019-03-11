import { Action } from '@ngrx/store';
import { ShoppingCartAction } from './../shared/enums/shopping-cart.actions';
import { Product } from '../models/product.model';

export class AddProduct implements Action {
    readonly type = ShoppingCartAction.AddProduct.toString();

    constructor(public payload: Product) {
    }
}

export class RemoveProduct implements Action {
    readonly type = ShoppingCartAction.RemoveProduct.toString();

    constructor(public payload: Product) {
    }
}

export type Actions = AddProduct | RemoveProduct;
