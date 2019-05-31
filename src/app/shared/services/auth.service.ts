import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { User, LoginObject } from '@shared/interfaces';
import { MessageService } from '@shared/services/message.service';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router
  ) { }

  token = localStorage.getItem('token');
  private _checkLogIn = new BehaviorSubject<boolean>(this.token ? true : false);

  private setLogedIn(user: LoginObject) {
    localStorage.setItem('token', '4179bafbbdcdc6dca8c4bf02f199c74848fc045d');
    localStorage.setItem('userDetails', JSON.stringify(user));
    this.messageService.handleSuccess('Login successful');
    this.router.navigate(['user/details']);
    this.setStatus(true);
  }

  getStatus() {
    return this._checkLogIn;
  }

  setStatus(isLoggedIn: boolean): void {
    this._checkLogIn.next(isLoggedIn);
  }

  logOut(): void {
    this.setStatus(false);
    localStorage.removeItem('token');
    localStorage.removeItem('userDetails');
    this.messageService.handleSuccess('Log out successful');
  }

  userLogIn(loginObject: LoginObject): Observable<object> {
    return this.http.post<LoginObject>('http://localhost:4444/rest/login', loginObject, httpOptions).pipe(
      tap(user => {
        this.setLogedIn(user);
      }),
      catchError(err => {
        this.messageService.handleError(err);
        return of<LoginObject>()
      })
    )
  }

  userRegister(loginObject: User): Observable<object> {
    return this.http.post<LoginObject>('http://localhost:4444/rest/register', loginObject, httpOptions).pipe(
      tap(user => {
        this.setLogedIn(user);
      }),
      catchError(err => {
        this.messageService.handleError(err);
        return of<LoginObject>()
      })
    )
  }

}
