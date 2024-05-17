import { Injectable } from '@angular/core';

declare let alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(message:string,messageType:MessageType, position:Position){
    alertify.set('notifier','position',position);

    alertify.error(message);

  }

}

export enum MessageType{
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success= "success",
  Warning= "warning",
}

export enum Position{
  BottomRight = "bottom-right",
  TopCenter="top-center",
  BottomCenter="bottom-center"
}
