import { GetMoviesService } from '../../app/get-movies.service';
import { Component, OnInit } from '@angular/core';
// import { Observable, Subject } from 'rxjs';
import { Movies } from './../interfaces/movies';
// import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private GetMoviesService: GetMoviesService) { }
  movies: object;
  moviesFromSearch: Movies<Object>;

  getSearchVal(val:Movies<Object>): void {
    this.moviesFromSearch = val;
  }

  ngOnInit() {
    // this.initialiseSearch().subscribe(movies => {
    //     this.movies = movies;
    //   });
  }
}
