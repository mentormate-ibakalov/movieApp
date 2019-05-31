import { Subscription } from 'rxjs';
import { SITEURLS } from '@shared/site-urls.config';
import { Movies } from '@shared/interfaces';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { MoviesService } from '@shared/services';



@Component({
  selector: 'app-special-categories',
  templateUrl: './special-categories.component.html',
  styleUrls: ['./special-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class SpecialCategoriesComponent implements OnInit {
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.category = params.get('special');
      this.getMoviesByCategory();
    })
  }

  movie: Movies;
  siteUrls = SITEURLS;
  category: string;
  checkLoggedIn: boolean;


  paginating(page: number) {
    this.getMoviesByCategory(page);
  }

  getMoviesByCategory(page?): void {
    this.moviesService.getMoviesByCategory(this.category, page).subscribe(
      response => {
        this.movie = response
        this.changeDetectorRef.markForCheck();
      }

    );
  }
  addFavorite(id: number) {
    this.moviesService.addFavoriteMovies(id).subscribe();
  }


  ngOnInit(): void {
    this.getMoviesByCategory();
  }
}
