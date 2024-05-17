import { Component ,ViewChild,AfterViewInit} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator ,MatPaginatorModule} from '@angular/material/paginator';
import { ProductService } from '../../../../services/comon/model/product.service';
import { ListProduct } from '../../../../Contracts/ListProduct';
import { DeleteDirective } from '../../../../directives/admin/delete.directive';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

declare var $ : any;

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatPaginator,MatPaginatorModule,MatTableModule,DeleteDirective,MatDialogModule,DeleteDialogComponent],
  providers:[ProductService],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  constructor(private ProductService:ProductService) {  }

  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate','updatedDate','edit','delete'];
  dataSource :  MatTableDataSource<ListProduct> =null ;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  getData(){

    this.ProductService.getAllProducts(this.paginator ?  this.paginator.pageIndex : 0,this.paginator ? this.paginator.pageSize : 5,(result)=>{
        this.dataSource= new MatTableDataSource<ListProduct>(result.products);
        this.paginator.length= Number(result.total) ;
      })
  }

  ngAfterViewInit() {
     this.getData();

  }

  pageChanged(){
     this.getData();
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
