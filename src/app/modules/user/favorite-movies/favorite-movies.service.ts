import { PostResponses } from '@shared/interfaces/postResponses';
import { MessageService } from '@shared/services/message.service';
import { Injectable } from '@angular/core';
import { Movies } from '@shared/interfaces/movies';
import { APIURL } from '@shared/apiUrl';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FavoriteMoviesService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }
  apiUrl = APIURL;
  private token =  localStorage.getItem('token');

  // userLogIn(loginObject:LoginObject): Observable<object> {
  //   return this.http.post<object>('http://localhost:4444/rest/login', loginObject, httpOptions).pipe();
  //   }

  addFavoriteMovies(id:number): Observable<any> {
    // let saveObject = `${this.apiUrl['root'] + this.apiUrl['URLS']['favorite-movies'] + this.apiUrl['api_key'] + '&session_id=' + this.token }`;
    let saveObject = {
      "media_type": "movie",
      "media_id": id,
      "favorite": true
    }

    return this.http.post<PostResponses>(`${this.apiUrl['root']}${this.apiUrl['URLS']['add-favorite-movies']}${this.apiUrl['api_key']}&session_id=${this.token}`, saveObject).pipe(
      tap(_ => this.messageService.handleSuccess(`Movie id ${id} succesfuly added`)),
      // catchError(err => this.messageService.handleError(err))
    );
  } 

  getFavoriteMovies(): Observable<Movies<Object>> {
    let formUrl = `${this.apiUrl['root'] + this.apiUrl['URLS']['favorite-movies'] + this.apiUrl['api_key'] + '&session_id=' + this.token }`;
    return this.http.get<any>(formUrl)
    .pipe(
      tap(_ => this.messageService.handleSuccess('Favorite movies loaded')),
      catchError(err => this.messageService.handleError(err))
    );

  }
}
