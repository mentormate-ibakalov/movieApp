import { Movies } from '@shared/interfaces/movies';
import { AuthService } from '@shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '@shared/services/search.service';
import { Observable } from 'rxjs';
import { GetMoviesService } from '@shared/services/get-movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   movies: Array<Observable<Movies<Object>>>;
   sideBars: Array<string>;
   searchResult$:Observable<Movies<Object>>;

  

  constructor(
    private SearchService: SearchService,
    private authService: AuthService,
    private getMoviesService: GetMoviesService,
    ) { 
      this.sideBars = ['popular-movies', 'now-playing-movies'];
    }

    checkLoggedIn: boolean;

    isLoggedIn() {
      this.authService.currentLoginStatus.subscribe(msg=> {
      this.checkLoggedIn = msg;
      })
    }


  getMovies(): Array<Observable<Movies<Object>>>  {
    // this.getMoviesService.getMovies(this.sideBars)[0].subscribe(f => console.log(f))
  //  this.getMoviesService.getMovies(this.sideBars)
  this.movies = this.getMoviesService.getMovies(this.sideBars);
  return this.movies;
  }

 getSearchResults() {
 this.searchResult$ = this.getMoviesService.searchResult;
 }

  ngOnInit() {
    this.getMovies();
    this.isLoggedIn();
    this.getSearchResults();

    // this.movies$ = this.SearchService.movies$;
  }

}
