import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  setTheme(color: string){    
    localStorage.setItem("theme",color);
    const element:any = document.querySelector("body");
    element.dataset["colorTheme"] = color;
  }
}
