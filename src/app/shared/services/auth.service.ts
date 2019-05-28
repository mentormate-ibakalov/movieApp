import { userObject } from './../interfaces/userObject';
import { MessageService } from '@shared/services/message.service';
import { Injectable } from '@angular/core';
import { LoginObject } from '@shared/interfaces/loginObj';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { FormingApiUrlService } from './auxiliaryServices/forming-api-url.service';
// import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient, private messageService: MessageService) {}
  token = localStorage.getItem('token');
  checkLogIn = new BehaviorSubject<boolean>(this.token ? true : false);
  currentLoginStatus = this.checkLogIn.asObservable();

  
  public setStatus(isLoggedIn: boolean): void {
  this.checkLogIn.next(isLoggedIn);
  }

  
userLogIn(loginObject:LoginObject): Observable<object> {
  return this.http.post<String>('http://localhost:4444/rest/login', loginObject, httpOptions).pipe(
  //   catchError(err => {
  //     // this.messageService.handleError(`sidebar No ${ index + 1 } has't loaded correctly`);
  //     console.log(err);
  //     return of();
  // })
  );
  }

  userRegister(loginObject:userObject): Observable<object> {
    return this.http.post<String>('http://localhost:4444/rest/register', loginObject, httpOptions).pipe();
    }

}
