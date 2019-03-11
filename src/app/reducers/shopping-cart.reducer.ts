import { ShoppingCart } from '../models/shopping-cart.model';
import * as ShoppingCartActions from '../actions/shopping-cart.action';
import { ShoppingCartAction } from '../shared/enums/shopping-cart.actions';

const initialState: ShoppingCart = {
    products: [],
    totalItems: 0,
    totalPrice: 0
};

export function shoppingCartReducer(state: ShoppingCart = initialState, action: ShoppingCartActions.Actions) {
    switch (action.type) {
        case ShoppingCartAction.AddProduct.toString():
            state.totalItems += 1;
            state.totalPrice += action.payload.price;
            state.products.push(action.payload);
            return state;
        case ShoppingCartAction.RemoveProduct.toString():
            const index = state.products.indexOf(action.payload);
            if (index > -1) {
                state.products.splice(index, 1);
            }
            state.totalItems -= 1;
            state.totalPrice -= action.payload.price;
            return state;
        default:
            return state;
    }
}
