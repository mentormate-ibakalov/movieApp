import { SingleMovie } from '@shared/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '@shared/services';
import { SITEURLS } from '@shared/site-urls.config';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})

export class MovieComponent implements OnInit {

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
  ) {

    this.id = + this.route.snapshot.paramMap.get('id');
  }

  movie$: Observable<SingleMovie>;
  id: number;
  siteUrls = SITEURLS;

  getMovie() {
   this.movie$ = this.moviesService.getMovie(this.id);
  }

  ngOnInit(): void {
    this.getMovie()
  }

}
