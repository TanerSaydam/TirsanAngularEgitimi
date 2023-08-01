import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RoutesModel } from 'src/app/common/models/routes.model';
import { SettingModel } from 'src/app/common/models/setting.model';
import { api } from 'src/app/const/apiUrl';
import { ProductModel } from 'src/app/models/product.model';
import { RoleModel } from 'src/app/models/role.model';
import { HttpService } from 'src/app/services/http.service';
import { SwalService } from 'src/app/services/swal.service';

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
  mainImageShowFile:any;
  roles: RoleModel[] = [];

  @ViewChild("mainImage") mainImage: ElementRef<HTMLInputElement>;
  constructor(
    private http: HttpService,    
    private swal: SwalService
    ){
      if(localStorage.getItem("roles")){
        const roleList = JSON.parse(localStorage.getItem("roles")) as RoleModel[];
        this.roles = roleList.filter(p=> p.section == "Products");
      }
    }

  ngOnInit(): void {
    this.getAll();
  }

  checkRole(section:string,role: string){
    const result = this.roles.findIndex(p=> p.name === role && p.section === section);
    if(result >= 0) return true;
    else return false;
  }

    getAll(){
      this.http.get(`${api}/Products/GetAll`,(res)=> {
        this.products = res;
      })
    }

  setMainImage(event: any){
    this.mainImageFile = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (e: any)=> {
      this.mainImageShowFile = {
        "src": e.target.result,
        "name": event.target.files[0].name,
        "size": event.target.files[0].size
      }
    }
    reader.readAsDataURL(event.target.files[0]);
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
        this.swal.callToast(res.message);        
        const element = document.getElementById("modal-add-close-btn");
        element.click();
        form.reset();
        const btns = document.querySelectorAll(".fileinput-remove-button");
        btns.forEach((el:any)=> {
          el.click();
        })
        this.getAll();
        this.mainImageFile = undefined;
        this.images = [];
      })
    }else{
      console.log("Validation hatası!");
    }
  }

  removeById(id: string){
    const result = window.confirm("Ürünü silmek istiyor musunuz?");
    if(result){
      this.http.get(`${api}/Products/RemoveById/${id}`,(res)=> {
        this.swal.callToast(res.message,"","info");
        this.getAll();
      })
    }
  }
}
