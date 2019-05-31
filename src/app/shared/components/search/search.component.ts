import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { MoviesService } from '@shared/services';
import { Observable } from 'rxjs';
import { SITEURLS } from '@shared/site-urls.config';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchComponent implements OnInit {
  constructor(
    private moviesService: MoviesService
  ) { }

  movies$: Observable<object>;
  siteUrls = SITEURLS;
  showList = false;
  value: string = '';

  @Output() emitToHeader = new EventEmitter();

  search(): void {
    this.moviesService.search(this.value);
  }

  hideDropdown(): void {
    this.showList = false;
    this.value = '';
  }

  initialiseSearch(): void {
    this.movies$ = this.moviesService.searchTerms$.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.moviesService.searchMovies(term)),
    )
  }

  ngOnInit() {
    this.initialiseSearch();
  }

}
