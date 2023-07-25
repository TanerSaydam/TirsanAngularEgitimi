import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  constructor(private config: NgSelectConfig) {
      this.config.notFoundText = "Bulunamadı";
  }

  profession: string = "";
  professions: string[] = ["Muhasebe","Finans","Yazılım"]
  addForm: any = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(3)]),
    email: new FormControl("",[Validators.required, Validators.email,Validators.minLength(3)]),
    phoneNumber: new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    profession: new FormControl(0),
    description: new FormControl("")
  });

  save(){
    if(!this.addForm.valid){
      alert("Validation kuralları geçersiz!");
    }else{
      console.log(this.addForm.value);
    }    
  }

  checkValidation(controlName: string, event:any){
    const control = this.addForm.controls[controlName];   
    if(!control.valid){
      event.target.className = "form-control is-invalid"
    }else{
      event.target.className = "form-control is-valid"
    }
  }
}
