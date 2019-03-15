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

            const addProduct = state.products.find(i => i.id === action.payload.id);
            if (addProduct) {
                addProduct.quantity += 1;
            } else {
                state.products.push(action.payload);
            }
            return state;

        case ShoppingCartAction.RemoveProduct.toString():
            const removeProduct = state.products.find(i => i.id === action.payload.id);
            if ((action as any).removeAll) {
                state.totalItems -= removeProduct.quantity;
                state.totalPrice -= (action.payload.price * removeProduct.quantity);

                state.products.splice(state.products.indexOf(action.payload), 1);
            } else {
                state.totalItems -= 1;
                state.totalPrice -= action.payload.price;
                removeProduct.quantity -= 1;

                if (removeProduct.quantity === 0) {
                    state.products.splice(state.products.indexOf(action.payload), 1);
                }
            }

            return state;
        default:
            return state;
    }
}
