import { Component,Input } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgForOf } from '@angular/common';
import { HttpClientService } from '../http-client.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AlertifyService, MessageType, Position } from '../../admin/alertify.service';
import { FileuploadDialogComponent,fileDialogData } from './fileupload-dialog/fileupload-dialog.component';
import { DialogServiceService } from '../dialog-service.service';



@Component({
  selector: 'app-fileupload',
  standalone: true,
  imports: [NgxFileDropModule,NgIf,NgFor,NgForOf,FileuploadDialogComponent],
  templateUrl: './fileupload.component.html',
  providers:[DialogServiceService],
  styleUrl: './fileupload.component.scss'
})
export class FileuploadComponent {

  public files: NgxFileDropEntry[];
  @Input() options :Partial<FileUploadOptions>;

  constructor(private HttpClientService:HttpClientService,
    private AlertifyService:AlertifyService,
    private DialogService:DialogServiceService){}


  public dropped(files: NgxFileDropEntry[]) {

    this.DialogService.openDialog({componentType:FileuploadDialogComponent,data:fileDialogData} ,()=>{
      this.files = files;
      const fileData :FormData = new FormData();

      for(const file of files){
        (file.fileEntry as FileSystemFileEntry).file((_file:File)=>{
          fileData.append(_file.name, _file, file.relativePath)
        });

        this.HttpClientService.post({
          controller:this.options.controller,
          action:this.options.action,
          queryString:this.options.queryString,
          headers:new HttpHeaders({"responseType": "blob"})
         },fileData).subscribe(result=>
          {
            this.AlertifyService.message("Files uploaded",MessageType.Error,Position.TopCenter);
          },
          (errorResponse:HttpErrorResponse) =>{
            this.AlertifyService.message("Files upload unsuccessful",MessageType.Error,Position.TopCenter);
          } );

      }
    });

  }
}

export class FileUploadOptions{
  controller?:string;
  action?:string;
  queryString?:string;
  explanation?:string;
  accept?:string;

}
