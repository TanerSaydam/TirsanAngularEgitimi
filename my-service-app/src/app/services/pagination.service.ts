import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  pageNumbers: number[] = [];

  setPageNumbers(pageNumber: number, totalPageNumber: number) {        
    this.pageNumbers = [];

    const startPage = Math.max(1, pageNumber - 2);
    const endPage = Math.min(totalPageNumber, pageNumber + 2);
    this.pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      if(i > totalPageNumber) break;

      this.pageNumbers.push(i);
    }   

    return this.pageNumbers;
  }
}
