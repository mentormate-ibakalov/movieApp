import { GetMoviesService } from '@shared/services/get-movies.service';
import { Movies } from '@shared/interfaces/movies';
import { MessageService } from '@shared/services/message.service';
import { Router } from '@angular/router';
// import { FavoriteMoviesService } from '@modules/user/favorite-movies/favorite-movies.service';
import { SITEURLS } from '@shared/siteUrls';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-movies',
  templateUrl: './get-movies.component.html'
})

export class GetMoviesComponent implements OnInit {
  constructor(
    private getMoviesService: GetMoviesService,
    private messageService: MessageService,
    private router: Router
  ) { }

  title: string;
  siteUrls = SITEURLS;

  @Input() movie: Observable<Movies<Object>>;
  @Input() checkLoggedIn: boolean;

  addFavorite(id: number) {
    if (!this.checkLoggedIn) {
      this.messageService.handleError('You need to be logged in to save movies to favorite');
      this.router.navigate(['user/login']);
    }
    else this.getMoviesService.addFavoriteMovies(id).subscribe();
  }

  ngOnInit() {
  }
}
