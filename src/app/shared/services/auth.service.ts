import { MessageService } from '@shared/services/message.service';
import { Injectable } from '@angular/core';
import { LoginObject } from '@shared/interfaces/loginObj';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient, private MessageService: MessageService) { }
  checkLogIn = new BehaviorSubject<boolean>(false);
  currentLoginStatus = this.checkLogIn.asObservable();

  public setStatus(isLoggedIn: boolean): void {
    this.checkLogIn.next(isLoggedIn);
  }

  userLogIn(loginObject:LoginObject): Observable<object> {
  return this.http.post<object>('http://localhost:4444/rest/login', loginObject, httpOptions).pipe();
  }

}
