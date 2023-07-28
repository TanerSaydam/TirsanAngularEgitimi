import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private error: ErrorService
  ) { }

  authPost(api: string, data: any, callBack:(res:any)=> void){
    this.http.post(api,data).subscribe({
      next: (res: any)=> {
        callBack(res)
      },
      error: (err: HttpErrorResponse)=> {
        console.log(err);
        this.error.errorHandler(err);
      }
    })
  }


}
