import { FormingApiUrlService } from './auxiliaryServices/forming-api-url.service';
import { SingleMovie } from '@shared/interfaces/singleMovie';
import { Movies } from '@shared/interfaces/movies';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { PostResponses } from '@shared/interfaces/postResponses';


@Injectable({
  providedIn: 'root'
})


export class GetMoviesService {
  constructor(
    private http: HttpClient, 
    private messageService: MessageService,
    private formingApiUrlService: FormingApiUrlService
    ) { }
  
  private searchInput: string = null;
  searchTerms = new Subject<string>();
  searchResult = new Subject<Movies<Object>>();
  currentSearchResult = this.searchResult.asObservable();


  getMovies(terms: Array<string>): Array<Observable<Movies<Object>>> {
    let allMovies:Array<Observable<Movies<Object>>> = [];
    terms.map((term, index) => {
      if (!term.trim()) {
        // if not search terms, return empty hero array.
        return of(null);
      }
      // let formUrl = `${this.apiUrl['root'] + this.apiUrl['URLS'][term] + this.apiUrl['api_key']}`;
      
      allMovies = [ ... allMovies,  this.http.get<Movies<Object>>(this.formingApiUrlService.movies(term))
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
    // let formUrl = `${this.apiUrl['root'] + this.apiUrl['URLS']['single-movie'] + '/' + id + this.apiUrl['api_key']}`;

    return this.http.get<Movies<Object>>(this.formingApiUrlService.singleMovie(id))
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

    // let formUrl = `${this.apiUrl['root'] + this.apiUrl['URLS']['search-movie'] + this.apiUrl['api_key'] + '&query=' + term.toLowerCase()}`;
    let search:Observable<Movies<Object>>
    search = this.http.get<Movies<Object>>(this.formingApiUrlService.searchForMovies(term))
      .pipe(
        tap(result => this.searchResult.next(result)),
        catchError(err => {
          this.messageService.handleError(`The search engine is not working`);
          return of<Movies<Object>>()
      }));
      return search;
  }

  getMoviesByCategory(category, page?):Observable<Movies<Object>> { 
  return this.http.get<Movies<Object>>(this.formingApiUrlService.movies(category, page))
   .pipe(
        // tap(result => this.searchResult.next(result)),
        catchError(err => {
          this.messageService.handleError(`Cannot recive movies from categorie ${category}`);
          return of<Movies<Object>>()
      }));
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

  addFavoriteMovies(id:number): Observable<any> {
    let saveObject = {
      "media_type": "movie",
      "media_id": id,
      "favorite": true
    }
    
    return this.http.post<PostResponses>(this.formingApiUrlService.addFavoriteMovies(), saveObject).pipe(
      tap(_ => this.messageService.handleSuccess(`Movie id ${id} succesfuly added`)),
      // catchError(err => this.messageService.handleError(err))
    );
  } 

  getFavoriteMovies(): Observable<Movies<Object>> {
    return this.http.get<Movies<Object>>(this.formingApiUrlService.getFavoriteMovies())
    .pipe(
      tap(_ => this.messageService.handleSuccess('Favorite movies loaded')),
      catchError(err => {
        this.messageService.handleError(err)
        return of<Movies<Object>>();
      })
    );

  }

}

