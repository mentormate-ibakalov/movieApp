import { SingleMovie } from './interfaces/singleMovie';
import { Movies } from './interfaces/movies';
import { APIS } from './app.apis';
// import { DUMMOVIES } from './interfaces/dummMovies';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class GetMoviesService {
  constructor(private http: HttpClient) { }
  private apis: Object = APIS;


  getMovies(enpoint?: string): Observable<Movies<Object>> {
    let formUrl = `${this.apis['root'] + this.apis['URLS'][enpoint] + this.apis['api_key']}`;

    return this.http.get<Movies<Object>>(formUrl)
      .pipe(
        // tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Movies<Object>>('getMovies', []))
      );
  }

  getMovie(id?: number): Observable<SingleMovie<Object>> {
    let formUrl = `${this.apis['root'] + this.apis['URLS']['single-movie'] + '/' + id + this.apis['api_key']}`;

    return this.http.get<Movies<Object>>(formUrl)
      .pipe(
        // tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Movies<Object>>('getMovies', []))
      );
  }



  // searchHeroes(term: string): Observable<Hero[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
  //     tap(_ => this.log(`found heroes matching "${term}"`)),
  //     catchError(this.handleError<Hero[]>('searchHeroes', []))
  //   );
  // }

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

