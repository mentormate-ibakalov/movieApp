import { Injectable } from '@angular/core';
import { Movies } from '../interfaces/movies';
import { APIS } from '../app.apis';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor(private http: HttpClient) { }
  private apis: Object = APIS;;

  searchMovies(term: string): Observable<Movies<Object>> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of(null);
    }
    let formUrl = `${this.apis['root'] + this.apis['URLS']['search-movie'] + this.apis['api_key'] + '&query=' + term.toLowerCase()}`;

    return this.http.get<Movies<Object>>(formUrl)
      .pipe(
        // tap(_ => this.log(`found heroes matching "${term}"`)),
        catchError(this.handleError<Movies<Object>>('searchHeroes', []))
      );

  }
  private handleError<T>(operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
