import { Product } from '../models/product.model';

export class ProductService {

    public getProductList(): Product[] {
        return [
            {
                id: 1, title: 'Winter body', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
                price: 110, img: './../../assets/images/item1.jpg', quantity: 1
            },
            {
                id: 2, title: 'Adidas', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
                price: 80, img: './../../assets/images/item2.jpg', quantity: 1
            },
            {
                id: 3, title: 'Vans', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
                price: 120, img: './../../assets/images/item3.jpg', quantity: 1
            },
            {
                id: 4, title: 'White', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
                price: 260, img: './../../assets/images/item4.jpg', quantity: 1
            },
            {
                id: 5, title: 'Cropped-sho', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
                price: 160, img: './../../assets/images/item5.jpg', quantity: 1
            },
            {
                id: 6, title: 'Blues', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.',
                price: 90, img: './../../assets/images/item6.jpg', quantity: 1
            }
        ];
    }
}
