import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }

  callSwal(title:string, text: string, btnName: string, callBack:()=> void){
    const theme = localStorage.getItem("theme");
    let background: string = "white";
    let color: string = "black";
    if(theme !== null){
      if(theme === "dark"){
        background = "black";
        color= "white";
      }
    }

    Swal.fire({
      background: background,
      color: color,
      title: title,
      text: text,
      showConfirmButton: true,
      confirmButtonText: `<i class='fa-solid fa-door-open'></i> ${btnName}`,
      showCancelButton: true,
      cancelButtonText: "<i class='fa-solid fa-x'></i> Vazgeç",
      iconHtml: "<i class='fa-solid fa-question'></i>"
    }).then(res=> {
      if(res.isConfirmed)
        callBack();
    })
  }

  callToast(text: string, title: string = "", icon: SweetAlertIcon = "success"){        
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    })
    Toast.fire(text, title, icon);
  }
}

export type SweetAlertIcon = 'success' | 'error' | 'warning' | 'info' | 'question'
