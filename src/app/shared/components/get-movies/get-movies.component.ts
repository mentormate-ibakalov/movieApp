import { MessageService } from '@shared/services/message.service';
import { Router } from '@angular/router';
import { FavoriteMoviesService } from '@modules/user/favorite-movies/favorite-movies.service';
import { SITEURLS } from '@shared/siteUrls';
import { GetMoviesService } from '@shared/services/get-movies.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';



@Component({
  selector: 'app-get-movies',
  templateUrl: './get-movies.component.html'
})

export class GetMoviesComponent implements OnInit {
  constructor(
    private getMoviesService: GetMoviesService,
    private messageService: MessageService,
    private favoriteMoviesService: FavoriteMoviesService,
    private router: Router
    ) {}

  movies$: Observable<Object>;
  title: string;
  siteUrls = SITEURLS;

  // private searchTerms = new Subject<string>();
  @Input() 
  type: string;
  @Input() checkLoggedIn: boolean;

  
  getMovies(): Observable<Object>  {
   return this.getMoviesService.getMovies(this.type);
  }
  

  addFavorite(id:number) {
    if (!this.checkLoggedIn) {
      this.messageService.handleError('You need to be logged in to save movies to favorite');
      this.router.navigate([ 'user/login' ]);
      
    }
    else this.favoriteMoviesService.addFavoriteMovies(id).subscribe();
  }

  ngOnInit() {
    this.movies$ = this.getMovies();
    this.title = this.type.replace(/-/g, " ").toUpperCase();
  }
}
