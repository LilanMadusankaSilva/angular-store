import { Product } from './product.model';

export interface ShoppingCart {
    products: Product[];
    totalItems: number;
    totalPrice: number;
}
