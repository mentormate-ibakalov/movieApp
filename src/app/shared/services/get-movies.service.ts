import { SingleMovie } from '@shared/interfaces/singleMovie';
import { Movies } from '@shared/interfaces/movies';
import { APIURL } from '@shared/apiUrl';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class GetMoviesService {
  constructor(private http: HttpClient) { }
  private apiUrl: Object = APIURL;
  searchObj: Observable<Movies<Object>>
  private searchInput: string = null;
  searchTerms = new Subject<string>();

  search(message: string) {
    this.searchInput = message;
    this.searchTerms.next(message);
  }

  getMovies(enpoint?: string): Observable<Movies<Object>> {
    let formUrl: string;
    if (this.searchInput) {
      formUrl = `${this.apiUrl['root'] + this.apiUrl['URLS']['search-movie'] + this.apiUrl['api_key'] + '&query=' + this.searchInput.toLowerCase()}`;
    } else {
      formUrl = `${this.apiUrl['root'] + this.apiUrl['URLS'][enpoint] + this.apiUrl['api_key']}`;
    }

    this.searchObj = this.http.get<Movies<Object>>(formUrl)
      .pipe(
        // tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Movies<Object>>('getMovies', []))
      );
    return this.searchObj;
  }


  // getMovies(enpoint?: string): Observable<Movies<Object>> {
  //   let formUrl = `${this.apiUrl['root'] + this.apiUrl['URLS'][enpoint] + this.apiUrl['api_key']}`;
  //   return this.http.get<Movies<Object>>(formUrl)
  //     .pipe(
  //       // tap(_ => this.log('fetched heroes')),
  //       catchError(this.handleError<Movies<Object>>('getMovies', []))
  //     );
  // }


  getMovie(id?: number): Observable<SingleMovie<Object>> {
    let formUrl = `${this.apiUrl['root'] + this.apiUrl['URLS']['single-movie'] + '/' + id + this.apiUrl['api_key']}`;

    return this.http.get<Movies<Object>>(formUrl)
      .pipe(
        // tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Movies<Object>>('getMovies', []))
      );
  }

  searchMovies(term: string): Observable<Movies<Object>> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of(null);
    }

    let formUrl = `${this.apiUrl['root'] + this.apiUrl['URLS']['search-movie'] + this.apiUrl['api_key'] + '&query=' + term.toLowerCase()}`;
    return this.http.get<Movies<Object>>(formUrl)
      .pipe(
        // tap(_ => this.log(`found heroes matching "${term}"`)),
        // catchError(this.handleError<Movies<Object>>('searchHeroes', []))
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

