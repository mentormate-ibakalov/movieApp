import { MoviesService } from '@shared/services';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SITEURLS } from '@shared/site-urls.config';


@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent implements OnInit {
  constructor(
    private moviesService: MoviesService
  ) { }
  
  movies$: Observable<object>;
  siteUrls = SITEURLS;

  ngOnInit() {
    this.movies$ = this.moviesService.getFavoriteMovies();
  }

}
