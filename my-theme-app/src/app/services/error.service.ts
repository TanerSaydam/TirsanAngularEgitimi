import { Injectable } from '@angular/core';
import { SwalService } from './swal.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private swal: SwalService
  ) { }

  errorHandler(err: HttpErrorResponse){
    console.log(err);
    if(err.status === 500){
      this.swal.callToast(err.error.Message,"","error")
    }
  }
}
