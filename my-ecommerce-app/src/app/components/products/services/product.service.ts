import { Injectable, inject } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { api } from 'src/app/statics/apiUrl';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  http = inject(HttpService);

  getAll(callBack: (res: ProductModel[])=> void){
    this.http.get(`${api}/products/getall`,(res: ProductModel[])=> {
      callBack(res);
    })
  }
}
