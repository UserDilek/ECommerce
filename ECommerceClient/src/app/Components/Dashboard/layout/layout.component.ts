import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideComponent } from '../side/side.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,MatSidenavModule,RouterOutlet,HeaderComponent,SideComponent,FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
