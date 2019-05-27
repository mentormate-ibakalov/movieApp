import { FavoriteMoviesService } from './favorite-movies.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SITEURLS } from '@shared/siteUrls';


@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent implements OnInit {

  constructor(private favoriteMoviesService: FavoriteMoviesService) { }
  movies$: Observable<object>;
  siteUrls = SITEURLS;

  ngOnInit() {
    this.movies$ = this.favoriteMoviesService.getFavoriteMovies();
  }

}
