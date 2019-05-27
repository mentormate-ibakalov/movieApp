import { GetMoviesService } from '@shared/services/get-movies.service';
import { Component, OnInit, Input } from '@angular/core';
import { SITEURLS } from '@shared/siteUrls';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
})
export class SearchResultComponent {
  constructor(private getMoviesService: GetMoviesService) {}
  movies$: Observable<Object>;
  siteUrls = SITEURLS
}
