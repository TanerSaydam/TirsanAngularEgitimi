import { Component, OnInit, inject } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
    standalone: true,
    imports: [NgFor]
})
export class ProductComponent implements OnInit { 
  products: ProductModel[] = [];

  productService = inject(ProductService);

  ngOnInit(): void {
    this.getAll();
  } 

  getAll(){
    this.productService.getAll((res)=> this.products = res);
  }
}
