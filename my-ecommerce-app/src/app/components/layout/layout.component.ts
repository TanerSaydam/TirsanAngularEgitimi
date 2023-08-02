import { Component } from '@angular/core';
import { ConfigComponent } from './config/config.component';
import { NotificationComponent } from './notification/notification.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
    standalone: true,
    imports: [NavbarComponent, SidebarComponent, RouterOutlet, NotificationComponent, ConfigComponent]
})
export class LayoutComponent {

}
