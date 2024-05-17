import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileuploadComponent } from './fileupload.component';
import { NgxFileDropModule } from 'ngx-file-drop';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxFileDropModule,
    FileuploadComponent
  ]
})
export class FileuploadModule {}
