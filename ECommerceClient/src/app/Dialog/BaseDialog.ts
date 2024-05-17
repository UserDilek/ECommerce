import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

export class BaseDialog<T>{
  constructor(public dialogRef: MatDialogRef<T>){}

  close(){
    this.dialogRef.close();
  }
}
