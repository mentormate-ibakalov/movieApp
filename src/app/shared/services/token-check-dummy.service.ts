import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokenCheckDummyService {
  constructor(private http: HttpClient) { }

  imitatingTokenExpirationcheck(): Observable<boolean> {
    if (localStorage.getItem('token')) {
      return this.http.post<boolean>( 'http://localhost:4444/rest/isLoggedIn', {} ).pipe();
    } else return of(false)
  }
}
