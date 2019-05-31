import { Movies } from '@shared/interfaces/movies';
import { Component, OnInit  } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '@shared/services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  movies: Array<Observable<Movies>>;
  sideBars: Array<string>;
  searchResult$: Observable<Movies>;

 
  constructor(
    private moviesService: MoviesService,
  ) {
    this.sideBars = ['popular-movies', 'now-playing-movies'];
  }

  getMovies(): Array<Observable<Movies>> {
    this.movies = this.moviesService.getMovies(this.sideBars);
    return this.movies;
  }

  getSearchResults() {
    this.searchResult$ = this.moviesService.getCurrentSearch();
  }

  addFavorite(id: number) {
    this.moviesService.addFavoriteMovies(id).subscribe();
  }

  ngOnInit(): void {
    this.getMovies();
    this.getSearchResults();
  }


}
