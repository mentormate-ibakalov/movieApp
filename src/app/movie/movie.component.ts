import { SingleMovie } from './../interfaces/singleMovie';
import { ActivatedRoute, Router } from '@angular/router';
// import { Movies } from './../interfaces/movies';
import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from '../../app/get-movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

export class MovieComponent implements OnInit {
  
  constructor(
    private GetMoviesService: GetMoviesService,
    private router: Router,
    private route: ActivatedRoute,
    ) {
      this.id = + this.route.snapshot.paramMap.get('id');
     }

  movie: SingleMovie<Object>;
  id: number;

  getMovie() {
    this.GetMoviesService.getMovie(this.id)
    .subscribe(movie => {
      this.movie = movie;
      console.log(this.movie);
    });
  }

  ngOnInit() {
    this.getMovie()
  }

}
