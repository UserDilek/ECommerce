import { Injectable } from '@angular/core';
import { HttpClientService } from '../../common/http-client.service';
import { CreateProduct } from '../../../Contracts/CreateProduct';
import { HttpErrorResponse } from '@angular/common/http';
import { ListProduct } from '../../../Contracts/ListProduct';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private HttpClientService:HttpClientService) { }
  getAllProducts(page=0,pageSize=5,successCallBack?:any,errorCallBack?:any){


    const products =  this.HttpClientService.get({
      controller:"Product",
      queryString:`page=${page}&pageSize=${pageSize}`
    }).subscribe(result=>{
      successCallBack(result);
    },(error)=>{
      console.log("dilek hata mesajı");
      console.log(error.message);
    })  ;

  }

  async read(successCallBack?:any, errorCallBack? : (errorMessage:string)=>void):Promise<ListProduct[]>{
   const promiseData :Promise<ListProduct[]> =   this.HttpClientService.get<ListProduct[]>({controller:"Product"}).toPromise();
   promiseData.then(d=>successCallBack())
     .catch((errorResponse:HttpErrorResponse)=>{
     errorCallBack(errorResponse.message);
    });
   return await promiseData;
  }

  // validation yapılması lazım.
   Create(product:CreateProduct,successCallBack?:any,errorCallBack?:any):void{

     this.HttpClientService.post({controller:"Product"},product)
         .subscribe(result=> {
          successCallBack()
         },
         (errorResponse:HttpErrorResponse)=>{
           const _error:Array<{key:string,value:Array<string>}> = errorResponse.error;
           let message = "";
           _error.forEach((item,index) =>{
              item.value.forEach((_item,_index)=>{
                message += `${_item}<br>`;
              });
           });
           errorCallBack(message);

         });
   }

   async Delete(id:string){
      var deleteObservable :Observable<any>=  this.HttpClientService.delete({controller:"Product"},id);
      return await  firstValueFrom(deleteObservable);
   }
}


