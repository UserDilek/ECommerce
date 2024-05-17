import { HttpClient } from '@angular/common/http';
import { Directive, ElementRef, EventEmitter, HostListener, Output, Input,Renderer2 } from '@angular/core';
import { HttpClientService } from '../../services/common/http-client.service';
import { firstValueFrom } from 'rxjs';
import { AlertifyService, MessageType, Position } from '../../services/admin/alertify.service';
import { DeleteDialogComponent, DialogData } from '../../Components/Dashboard/product/delete-dialog/delete-dialog.component';
import { DialogServiceService } from '../../services/common/dialog-service.service';

declare var $ :any;
@Directive({
  selector: '[appDelete]',
  standalone: true,
  providers:[Input,HttpClientService,DeleteDialogComponent]
})
export class DeleteDirective {

  constructor(private element:ElementRef,private _renderer :Renderer2,
    private HttpClientService:HttpClientService,private AlertifyService:AlertifyService,
    private DialogService :DialogServiceService) {
    const img = _renderer.createElement("img");
    img.setAttribute("src","assets/trash_icon.png");
    img.setAttribute("style","cursor:pointer");
    img.width = 30;
    img.height = 30;
    _renderer.appendChild(element.nativeElement,img);

   }

   @Input() id :string;
   @Input() controller :string;
   @Output() callback:EventEmitter<any> = new EventEmitter();

   @HostListener("click")
   async onClick(){

  this.DialogService.openDialog({componentType:DeleteDialogComponent,data:DialogData},async()=>{
    const td:HTMLTableCellElement = this.element.nativeElement;
    var deleteObservable = this.HttpClientService.delete({
     controller:this.controller
    },this.id);

     await  firstValueFrom(deleteObservable);
     this.callback.emit();
     this.AlertifyService.message("Product is deleted",MessageType.Error,Position.BottomRight);
  })

   }
}
