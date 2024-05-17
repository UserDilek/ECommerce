import { Component, ElementRef, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ProductService } from '../../../../services/comon/model/product.service';
import { CreateProduct } from '../../../../Contracts/CreateProduct';
import { ViewChild } from '@angular/core';
import { AlertifyService } from '../../../../services/admin/alertify.service';
import { MessageType } from '../../../../services/admin/alertify.service';
import { Position } from '../../../../services/admin/alertify.service';
import { EventEmitter } from '@angular/core';
import { FileUploadOptions, FileuploadComponent } from '../../../../services/common/fileupload/fileupload.component';




@Component({
  selector: 'app-create',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,FormsModule,MatButtonModule,FileuploadComponent],
  providers:[ProductService],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
   @ViewChild('txtName') txtName: ElementRef<HTMLInputElement>;
   @ViewChild('txtStock') txtStock: ElementRef<HTMLInputElement>;
   @ViewChild('txtPrice') txtPrice: ElementRef<HTMLInputElement>;

   @Output() fileUploadOptions:Partial<FileUploadOptions> = {
    action:"Upload",
    controller:"Product",
    explanation:"Select Product Images",
    accept:".png ,.jpg, .jpeg"
   }

  constructor(private  ProductService:ProductService,private AlertifyService :AlertifyService) {

  }

  @Output() createdProduct : EventEmitter<CreateProduct> = new EventEmitter();


  createProduct(name:HTMLInputElement, stock:HTMLInputElement,price:HTMLInputElement){
    const create_product  :CreateProduct = new CreateProduct();
     create_product.name = name.value;
     create_product.stock = parseInt(stock.value);
     create_product.price = parseFloat(price.value);

     this.ProductService.Create(create_product,()=>{
      this.AlertifyService.message("The product added succesfuuly",MessageType.Error,Position.TopCenter);
      this.txtName.nativeElement.value = '';
      this.txtStock.nativeElement.value = '';
      this.txtPrice.nativeElement.value = '';

      this.createdProduct.emit(create_product);

    },(errorMessage)=>{
        this.AlertifyService.message(errorMessage,MessageType.Error,Position.TopCenter);
     });

  }

}
