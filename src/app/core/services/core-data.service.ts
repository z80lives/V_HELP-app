import { Injectable } from '@angular/core';
import {Message, MessageService} from 'primeng/api';
import {Router} from "@angular/router";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoreDataService {

  constructor(
    private notificationProvider: MessageService,
    private _router : Router
  ) { }

  public notify(msg : Message){
    return this.notificationProvider.add({
      ...msg
    });
  }

  public fetchRouter(){
    return this._router;
  }
  //
  // notifyInfo(params: Partial<Message>) {
  //   return this.notify({
  //     severity: 'info',
  //     ...params
  //   })
  // }

  notifyInfo(title: string, message: string){
    return this.notify({
      severity: 'info',
      summary: title,
      detail: message
    });
  }

  handleError = (err : Error) => this.error(err);

  $handleError = catchError((err, caught) => {
    this.error(err);
    return caught;
  })

  private processError(errorObj : any){
    if(errorObj.statusCode && errorObj.details){
      let initMessage = errorObj.message;
      switch (errorObj.statusCode){
        case 422:
          initMessage= "Invalid data sent to server."
          break;
      }
      let message =
        initMessage + ' Details: '+ errorObj.details.map((err: any) => err.message).join('. ');
      return {
        ...errorObj,
        message
      }
    }
    return errorObj;
  }

  public error(title: string | object, message?: string){
    let msgObj : any = (message?{detail: message}:{});
    let summary = title;
    if(typeof (title) === 'object'){
      let err : any= (title as any);
      //retrieve the http error object if it exists
      const errObj = this.processError(err?.error?.error || err?.error);
      const summary = errObj?.name || err.statusText;
      console.debug("Obj", errObj)
      msgObj = {
        summary,
        detail: errObj?.message || err.message
      }
      return this.notify({
        severity: "error",
        ...msgObj
      });
    }else {
      return this.notify({
        severity: "error",
        summary: title,
        ...msgObj
      });
    }
  }
}
