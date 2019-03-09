import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
  })
  export class HomeComponent implements OnInit {

    public productList: Product[];

    constructor(private productService: ProductService) {
    }

    async ngOnInit(): Promise<void> {
      this.productList = this.productService.getProductList();
    }

  }
