import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoutesModel } from 'src/app/common/models/routes.model';
import { SettingModel } from 'src/app/common/models/setting.model';
import { api } from 'src/app/const/apiUrl';
import { ProductModel } from 'src/app/models/product.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductUpdateComponent {
  title: "Product Update";
  routes: RoutesModel[] = [];
  settings: SettingModel[] = [];

  mainImageFile: any = null;
  images: any[] = [];

  product: ProductModel = new ProductModel();


  constructor(
    private activate: ActivatedRoute,
    private http: HttpService,
    private toastr: ToastrService,
    private router: Router
  ){
    activate.params.subscribe(res=> {
      const id: string = res["value"];
      this.http.get(`${api}/Products/GetById/${id}`,(res)=> {
        this.product = res
      });
    })
  }  

  update(form: NgForm){
    if(form.valid){
      const formData = new FormData();
      formData.append("id", this.product.id);
      formData.append("name", form.controls["name"].value);
      formData.append("stock", form.controls["stock"].value);
      formData.append("price", form.controls["price"].value);

      this.product.productImages.forEach((image, index) => {
        formData.append(`productImages`, image.id.toString());
      });

      if(this.mainImageFile != null)
        formData.append("mainImage", this.mainImageFile,this.mainImageFile.name);

      this.images.forEach(element=> {
        //console.log(element);
        formData.append("images",element,element.name)
      });
      this.http.post(`${api}/Products/Update`,formData,(res=> {
        this.toastr.info(res.message);
        this.router.navigateByUrl("/products");
      }))
    }
  }

  setMainImage(event: any){
    this.mainImageFile = event.target.files[0];
  }

  setImages(event: any){
    this.images = [];
    for (let i = 0; i < event.target.files.length; i++) {
      const element = event.target.files[i];
      this.images.push(element);      
    }
  }

  removeImage(index: number){    
    this.product.productImages.splice(index,1);
  }  
}
