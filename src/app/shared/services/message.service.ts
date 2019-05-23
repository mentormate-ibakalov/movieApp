import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class MessageService {
  alert = new BehaviorSubject<object>({});
  currentMassage = this.alert.asObservable();

  private log(message: string, type?: string) {
    this.alert.next({ msg: message, type: type })
  }

  public clearAlert(): any {
    this.alert.next({});
  }

  public handleSuccess(msg?: any): any {
    if (msg) return this.log(msg, 'success')
    else return this.log('super', 'success');
  }


  public handleError(err?: any): any {
    if (err.hasOwnProperty('error')) return this.log(err.error, 'error')
    else if ( typeof err == 'string')  return this.log(err, 'error')
    else return this.log('something went wrong', 'error');
  }

}
