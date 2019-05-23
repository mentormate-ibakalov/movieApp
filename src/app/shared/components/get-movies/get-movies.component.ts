import { MessageService } from '@shared/services/message.service';
import { Router } from '@angular/router';
import { FavoriteMoviesService } from '@modules/user/favorite-movies/favorite-movies.service';
import { SITEURLS } from '@shared/siteUrls';
import { GetMoviesService } from '@shared/services/get-movies.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';



@Component({
  selector: 'app-get-movies',
  templateUrl: './get-movies.component.html',
  styleUrls: ['./get-movies.component.scss']
})

export class GetMoviesComponent implements OnInit {
  constructor(
    private GetMoviesService: GetMoviesService,
    private messageService: MessageService,
    private favoriteMoviesService: FavoriteMoviesService,
    private router: Router
    ) { }

  movies$: Observable<Object>;
  title: string;
  siteUrls = SITEURLS;

  // private searchTerms = new Subject<string>();
  @Input() 
  type: string;
  @Input() checkLoggedIn: boolean;

  
  getMovies(): Observable<Object>  {
   return this.GetMoviesService.getMovies(this.type);
  }
  

  addFavorite(id:number) {
    if (!this.checkLoggedIn) {
      this.messageService.handleError('You need to be logged in to save movies to favorite');
      this.router.navigate([ 'user/login' ]);
      
    }
    else this.favoriteMoviesService.addFavoriteMovies(id).subscribe();
  }

  
  // search(term: string): void {
  //   this.searchTerms.next(term);
  // }

  // initialiseSearch(): void {
  //   this.movies$ = this.searchTerms.pipe(
  //     // wait 300ms after each keystroke before considering the term
  //     debounceTime(300),

  //     // ignore new term if same as previous term
  //     distinctUntilChanged(),

  //     // switch to new search observable each time the term changes
  //     switchMap((term: string) => this.GetMoviesService.searchMovies(term)),
  //   )   
  //   // this.GetMoviesService.passSearchData(this.movies$);
  // }

  ngOnInit() {
    // ;
    // this.getMovies();
    // this.movies$ = this.GetMoviesService.currentObj;
    this.movies$ = this.getMovies();
    
    // this.GetMoviesService.currentObj.subscribe(mess => console.log(mess));

    this.title = this.type.replace(/-/g, " ").toUpperCase();
  }
}
