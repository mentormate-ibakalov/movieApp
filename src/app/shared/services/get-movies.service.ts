import { SingleMovie } from '@shared/interfaces/singleMovie';
import { Movies } from '@shared/interfaces/movies';
import { APIURL } from '@shared/apiUrl';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})


export class GetMoviesService {
  constructor(private http: HttpClient, private messageService: MessageService) { }
  
  private apiUrl: Object = APIURL;
  private searchInput: string = null;
  searchTerms = new Subject<string>();
  // searchResult = new Subject<Movies<Object>();
  searchResult = new Subject<Movies<Object>>();
  currentSearchResult = this.searchResult.asObservable();

  // = this.alert.asObservable();

  getMovies(terms: Array<string>): Array<Observable<Movies<Object>>> {
    let allMovies:Array<Observable<Movies<Object>>> = [];

    terms.map((term, index) => {
      if (!term.trim()) {
        // if not search terms, return empty hero array.
        return of(null);
      }
      let formUrl = `${this.apiUrl['root'] + this.apiUrl['URLS'][term] + this.apiUrl['api_key']}`;
      allMovies = [ ... allMovies,  this.http.get<Movies<Object>>(formUrl)
      .pipe(
        tap(obj => {
          // MUTATING
          obj.title = term;
        }),
        catchError(err => {
          this.messageService.handleError(`sidebar No ${ index + 1 } has't loaded correctly`);
          console.log(err);
          return allMovies[index];
      })
      )];
    });
    return allMovies;
  };
  

  getMovie(id?: number): Observable<SingleMovie<Object>> {
    let formUrl = `${this.apiUrl['root'] + this.apiUrl['URLS']['single-movie'] + '/' + id + this.apiUrl['api_key']}`;

    return this.http.get<Movies<Object>>(formUrl)
      .pipe(
        // tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Movies<Object>>('getMovies', []))
      );
  }

  search(message: string) {
    this.searchInput = message;
    this.searchTerms.next(message);
  }


  searchMovies(term:string): any {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of(null);
    }

    let formUrl = `${this.apiUrl['root'] + this.apiUrl['URLS']['search-movie'] + this.apiUrl['api_key'] + '&query=' + term.toLowerCase()}`;
    let search:Observable<Movies<Object>>
    search = this.http.get<Movies<Object>>(formUrl)
      .pipe(
        tap(result => this.searchResult.next(result)),
        catchError(err => {
          this.messageService.handleError(`The search engine is not working`);
          return search;
      }));
      return search;
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

