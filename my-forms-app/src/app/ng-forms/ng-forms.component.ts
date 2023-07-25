import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-forms',
  templateUrl: './ng-forms.component.html',
  styleUrls: ['./ng-forms.component.css']
})
export class NgFormsComponent {
  professions: string[] = ["Muhasebe","Finans","Yazılım"]
  professionInput: number = 0;  
  date:string = "";

  constructor(
    private datePipe: DatePipe
  ){
    this.date = this.datePipe.transform(new Date(),"yyyy-MM-dd");    
  }

  save(form:NgForm){
    if(!form.valid){
      alert("Zorunlu alanları doldurun!")
    }else{
      console.log(form.value);
    }
  }
}
