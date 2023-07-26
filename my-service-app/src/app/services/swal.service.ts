import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }

  callSwal(text: string,callBack:(res:any)=> void){
    Swal.fire({
      title: 'Sil!',
      text: text,
      showConfirmButton: true,
      confirmButtonText: '<i class="fa fa-trash"></i> Sil',
      confirmButtonColor: "red",
      showCancelButton: true,
      cancelButtonText: '<i class="fa fa-x"></i> Vazgeç',
      icon: "question",
    }).then((res) => {
      callBack(res);
    });
  }
}
