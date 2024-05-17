import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { combineLatest } from 'rxjs';
import { AlertifyService } from '../admin/alertify.service';


@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor(public dialog: MatDialog,private AlertifyService:AlertifyService ) {}

  openDialog(dialogParameters:Partial<DialogParamaters> ,callback:any){

    const dialogRef = this.dialog.open(dialogParameters.componentType,{width:"250px",data:dialogParameters.data.Yes})
    dialogRef.afterClosed().subscribe(result => {
      if(result==dialogParameters.data.Yes && typeof result !== 'string'){
        callback();
      }
    });
  }
}

export class DialogParamaters{
  componentType:ComponentType<any>;
  data:any;
}
