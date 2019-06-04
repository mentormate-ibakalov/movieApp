import { Router } from '@angular/router';
import { FormingApiUrlService } from './auxiliaryServices/forming-api-url.service';
import { SingleMovie } from '@shared/interfaces/singleMovie';
import { Movies } from '@shared/interfaces/movies';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { PostResponses } from '@shared/interfaces/postResponses';
// import { errorHandler } from '@angular/platform-browser/src/browser';


@Injectable({
  providedIn: 'root'
})


export class MoviesService {
  constructor(
    private http: HttpClient, 
    private messageService: MessageService,
    private router: Router,
    private formingApiUrlService: FormingApiUrlService
    ) { }
  



  searchTerms$ = new Subject<string>();
  private _searchInput: string = null;
  private _searchResult$ = new Subject<Movies>();

  // currentSearchResult = this.searchResult$.asObservable();

  getCurrentSearch() {
    return this._searchResult$;
  }

  search(message: string) {
    this._searchInput = message;
    this.searchTerms$.next(message);
  }


  searchMovies(term:string): any {
    if (!term.trim()) {
      return of(null);
    }
    let search:Observable<Movies>
    search = this.http.get<Movies>(this.formingApiUrlService.searchForMovies(term))
      .pipe(
        tap(result => this._searchResult$.next(result)),
        catchError(err => {
          this.messageService.handleError(`The search engine is not working`);
          return of<Movies>()
      }));
      return search;
  }

  getMovies(terms: Array<string>): Array<Observable<Movies>> {
    let allMovies:Array<Observable<Movies>> = [];
    terms.map((term, index) => {
      if (!term.trim()) {
        return of(null);
      }
      
      allMovies = [ ... allMovies,  this.http.get<Movies>(this.formingApiUrlService.movies(term))
      .pipe(
        tap(obj => {
          // MUTATING
          obj.title = term;
        }),
        catchError(err => {
          // this.messageService.handleError(`sidebar No ${ index + 1 } has't loaded correctly`);
          // console.log(err);
          return allMovies[index];
      })
      )];
    });
    return allMovies;
  };

  getMovie(id?: number): Observable<SingleMovie> {
    return this.http.get<SingleMovie>(this.formingApiUrlService.singleMovie(id)).pipe(
      catchError(err => {
        this.messageService.handleError(err);
        return of<SingleMovie>();
      })
    );
  }

  getMoviesByCategory(category, page?):Observable<Movies> { 
  return this.http.get<Movies>(this.formingApiUrlService.movies(category, page))
   .pipe(
        catchError(err => {
          this.messageService.handleError(`Cannot recive movies from categorie ${category}`);
          return of<Movies>()
      }));
    }

  addFavoriteMovies(id:number): Observable<PostResponses> {
    let saveObject = {
      "media_type": "movie",
      "media_id": id,
      "favorite": true
    }
    
    return this.http.post<PostResponses>(this.formingApiUrlService.addFavoriteMovies(), saveObject)
    .pipe(
      tap(_ => this.messageService.handleSuccess(`Movie id ${id} succesfuly added`)),
      catchError(err => {
        this.messageService.handleError('You need to be logged in to save movies to favorite');
        this.router.navigate( ['user/login' ]);
        return of<PostResponses>();
      })
    );
  } 

  getFavoriteMovies(): Observable<Movies> {
    return this.http.get<Movies>(this.formingApiUrlService.getFavoriteMovies())
    .pipe(
      tap(_ => this.messageService.handleSuccess('Favorite movies loaded')),
      catchError(err => {
        this.messageService.handleError(err)
        return of<Movies>();
      })
    );

  }

}

