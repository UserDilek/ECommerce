import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Components/UI/home/home.component';
import { LayoutComponent } from './Components/Dashboard/layout/layout.component';
import { RouterLink } from '@angular/router';
import { AlertifyService,MessageType ,Position} from './services/admin/alertify.service';



declare var $: any;
declare var alertify:any;


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,LayoutComponent,RouterLink],
  providers:[AlertifyService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})


export class AppComponent  {
  title = 'ECommerceClient';
  dilek= 'Design by Dilek';

  ngOnInit(){
    alertify.success("dilek");
  }
}




