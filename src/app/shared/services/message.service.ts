import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class MessageService {
  private _alert = new BehaviorSubject<object>({});


  private _log(message: string, type?: string) {
    this._alert.next({ msg: message, type: type })
  }

  getMessage() {
   return this._alert;
  }

  public clearAlert(): any {
    this._alert.next({});
  }

  public handleSuccess(msg?: any): any {
    if (msg) return this._log(msg, 'success')
    else return this._log('super', 'success');
  }

  public handleError(err?: any): any {
    if (err.hasOwnProperty('error')) return this._log(err.error, 'error')
    else if ( typeof err == 'string')  return this._log(err, 'error')
    else return this._log('something went wrong', 'error');
  }

}
