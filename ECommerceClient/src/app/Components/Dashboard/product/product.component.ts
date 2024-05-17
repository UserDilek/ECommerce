import {Component, ViewChild} from '@angular/core';
import { HttpClientService } from '../../../services/common/http-client.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { listenerCount } from 'process';
import { CreateProduct } from '../../../Contracts/CreateProduct';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { FileuploadModule } from '../../../services/common/fileupload/fileupload.module';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatSidenavModule,CreateComponent,ListComponent,MatDialogModule,FileuploadModule],
  providers:[HttpClientService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

     constructor() { }

  @ViewChild(ListComponent) listComponent :ListComponent;

  createdProduct(created_product:CreateProduct){
    this.listComponent.getData();
  }

}
