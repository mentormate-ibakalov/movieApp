import { SingleMovie } from '@shared/interfaces/singleMovie';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from '@shared/services/get-movies.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

export class MovieComponent implements OnInit {

  constructor(
    private getMoviesService: GetMoviesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.id = + this.route.snapshot.paramMap.get('id');
  }

  movie: SingleMovie<Object>;
  id: number;

  getMovie() {
    this.getMoviesService.getMovie(this.id)
      .subscribe(movie => {
        this.movie = movie;
      });
  }

  ngOnInit() {
    this.getMovie()
  }

}
