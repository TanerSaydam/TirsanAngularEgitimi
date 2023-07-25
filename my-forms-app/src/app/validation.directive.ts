import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appValidation]'
})
export class ValidationDirective {

  @Input("appValidation") appValidation:boolean = false;
  constructor(
    private el: ElementRef<any>
  ) { }

  @HostListener("input") mouseenter(){
    if(this.appValidation){
      this.el.nativeElement.classList.add("is-valid");
      this.el.nativeElement.classList.remove("is-invalid");
    }else{
      this.el.nativeElement.classList.add("is-invalid");
      this.el.nativeElement.classList.remove("is-valid");
    }

  }
}
