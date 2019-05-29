import { GetMoviesService } from '@shared/services/get-movies.service';
// import { FavoriteMoviesService } from './favorite-movies.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SITEURLS } from '@shared/siteUrls';


@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent implements OnInit {

  constructor(
    private getMoviesService: GetMoviesService
  ) { }
  
  movies$: Observable<object>;
  siteUrls = SITEURLS;

  ngOnInit() {
    this.movies$ = this.getMoviesService.getFavoriteMovies();
  }

}
