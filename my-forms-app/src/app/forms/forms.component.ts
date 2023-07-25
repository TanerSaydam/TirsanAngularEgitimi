import { Component, ElementRef } from '@angular/core';

class User{
  name: string = "";
  email: string = "";
  phoneNumber: string = "";
  profession: number = 0;
  description: string = "";
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent { 
  user: User = new User();

  save(name:HTMLInputElement,email:any,phoneNumber:any){
    if(!name.validity.valid || !email.validity.valid || !phoneNumber.validity.valid){
      if(!name.validity.valid){
        name.className = "form-control is-invalid";
      }

      if(!email.validity.valid)
        email.className = "form-control is-invalid";
      
      if(!phoneNumber.validity.valid)
        phoneNumber.className = "form-control is-invalid";
      return;
    }

    console.log(this.user);
    this.user = new User();
  }

  checkValidation(el:any){
    console.log(el)
    if(!el.target.validity.valid)
      el.target.className="form-control is-invalid"
    else
      el.target.className="form-control is-valid"
  }
}
