import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private toastr: ToastrService
  ) { }

  errorHandler(err: HttpErrorResponse){
    console.log(err);    
    switch (err.status) {
      case 500:
        this.toastr.error(err.error.Message);
        break;
      case 0:
        this.toastr.error("Api adresine ulaşılamıyor!");
        break;
    }
  }
}
