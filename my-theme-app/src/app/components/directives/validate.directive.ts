import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appValidate]'
})
export class ValidateDirective {
  
  @Input("appValidate") appValidate: boolean = false;
  constructor(
    private el: ElementRef<any>
  ) { }


  @HostListener("keyup") keyup(){    
    if(this.appValidate){
      this.el.nativeElement.classList.add("is-valid");
      this.el.nativeElement.classList.remove("is-invalid");
    }else{
      this.el.nativeElement.classList.add("is-invalid");
      this.el.nativeElement.classList.remove("is-valid");
    }
  }

}
