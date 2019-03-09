import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {

  @Input() item: Product;

  public async onAddItem(itemId: number): Promise<void> {
    alert('Hi');
  }

}
