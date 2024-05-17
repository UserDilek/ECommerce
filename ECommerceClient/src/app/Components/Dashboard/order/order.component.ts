import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { ProductService } from '../../../services/comon/model/product.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [MatSidenavModule,MatTableModule],
  providers:[ProductService],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

  constructor(private ProductService:ProductService) {
  }

  ngOnInit():void{
    //let dataSource =  this.HttpClientService.get({controller:"product"}).subscribe(data=>console.log(data));
  }

}
