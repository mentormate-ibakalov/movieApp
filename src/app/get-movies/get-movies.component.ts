import { GetMoviesService } from '../../app/get-movies.service';
import { Component, OnInit, Input } from '@angular/core';
import { Movies } from '../interfaces/movies';

@Component({
  selector: 'app-get-movies',
  templateUrl: './get-movies.component.html',
  styleUrls: ['./get-movies.component.scss']
})

export class GetMoviesComponent implements OnInit {
  constructor(private GetMoviesService: GetMoviesService) { }
  movies: Movies<Object>;
  title: string;
  @Input() type: string;

  getMovies() {
    this.GetMoviesService.getMovies(this.type)
    .subscribe(movies => {
      this.movies = movies;
      console.log(this.movies);
    });
  }
  
  ngOnInit() {
    this.getMovies();
    this.title = this.type.replace(/-/g, " ").toUpperCase();
  }
}
