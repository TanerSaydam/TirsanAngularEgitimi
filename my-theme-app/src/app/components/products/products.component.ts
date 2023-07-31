import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RoutesModel } from 'src/app/common/models/routes.model';
import { SettingModel } from 'src/app/common/models/setting.model';
import { api } from 'src/app/const/apiUrl';
import { ProductModel } from 'src/app/models/product.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title: string = "Products";
  routes: RoutesModel[] = [
    {
      name: "Products",
      link: "/products",
      icon: ""
    }
  ];
  settings: SettingModel[] = [];
  mainImageFile: any;
  images: any[] = [];
  products: ProductModel[] = [];

  constructor(
    private http: HttpService,
    private toastr: ToastrService
    ){}

  ngOnInit(): void {
    this.getAll();
  }

    getAll(){
      this.http.get(`${api}/Products/GetAll`,(res)=> {
        this.products = res;
      })
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

  save(form: NgForm){
    if(form.valid){
      const formData = new FormData();
      formData.append("name",form.controls["name"].value);
      formData.append("stock",form.controls["stock"].value);
      formData.append("price",form.controls["price"].value);
      formData.append("mainImage",this.mainImageFile,this.mainImageFile.name);
      if(this.images.length > 0){
        this.images.forEach(element=> {
          console.log(element);
          formData.append("images", element, element.name);
        });
      }else{
        formData.append("images", null);
      }      
      this.http.post(`${api}/Products/Add`,formData,(res)=> {
        this.toastr.success(res.message);
        const element = document.getElementById("modal-add-close-btn");
        element.click();
        form.reset();
        this.getAll();
        this.mainImageFile = undefined;
        this.images = [];
      })
    }
  }
}
