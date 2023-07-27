import { Component, OnInit, inject } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
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
