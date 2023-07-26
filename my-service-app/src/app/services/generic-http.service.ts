import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  constructor(
    private http: HttpClient,
    private error: ErrorService
  ) { }

  post(api: string, data: any, callBack: (res:any)=> void){
    this.http.post(api,data).subscribe(
      {
        next: (res:any)=> callBack(res),
        error: (err: HttpErrorResponse) => this.error.errorHandler(err)
      }
    )
  }

  get<T>(api: string, callBack:(res:T)=> void){
    this.http.get(api).subscribe(
      {
        next: (res: any)=> callBack(res),
        error: (err: HttpErrorResponse) => this.error.errorHandler(err)
      }
    )
  }
}
