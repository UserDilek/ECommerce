import { Component } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Inject } from '@angular/core';
import { BaseDialog } from '../../../../Dialog/BaseDialog';


@Component({
  selector: 'app-fileupload-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,MatDialogContent,MatDialogActions,MatDialogClose],
  templateUrl: './fileupload-dialog.component.html',
  styleUrl: './fileupload-dialog.component.scss'
})
export class FileuploadDialogComponent extends BaseDialog<FileuploadDialogComponent> {
  constructor( dialogRef: MatDialogRef<FileuploadDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: fileDialogData){
      super(dialogRef);
    }
}

export enum fileDialogData{
 Yes,No
}
