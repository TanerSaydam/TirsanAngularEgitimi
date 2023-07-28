import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SwalService } from 'src/app/services/swal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private swal: SwalService
    ) {}

  logout(){
    this.swal.callSwal("Çıkış Yap?","Çıkış yapmak istiyor musunuz?","Çıkış Yap",()=> {
      localStorage.removeItem("response");
      localStorage.removeItem("emailOrUserName");
      this.router.navigateByUrl("/login");
      this.swal.callToast("Çıkış işlemi başarıyla gerçekleştirildi!","","info")
    });
  }
}
