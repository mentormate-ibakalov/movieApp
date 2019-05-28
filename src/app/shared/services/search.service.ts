import { Injectable } from '@angular/core';
import { Movies } from '@shared/interfaces/movies';
import { APIURL } from '@shared/apiUrl';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SearchService {

  // constructor(private http: HttpClient) { }
  // private apiUrl: Object = APIURL;
  // movies$: Observable<object>;


  // searchMovies(term: string): Observable<Movies<Object>> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of(null);
  //   }
  //   let formUrl = `${this.apiUrl['root'] + this.apiUrl['URLS']['search-movie'] + this.apiUrl['api_key'] + '&query=' + term.toLowerCase()}`;

  //   return this.http.get<Movies<Object>>(formUrl)
  //     .pipe(
  //       catchError(this.handleError<Movies<Object>>('searchHeroes', []))
  //     );

  // }

  // passSearchData(movies: Observable<object>): void {
  //   this.movies$ = movies;
  //   this.movies$.subscribe(s => console.log(s))
  // }


  // private handleError<T>(operation = 'operation', result?: any) {
  //   return (error: any): Observable<any> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     // this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
}
