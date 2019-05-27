import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GetMoviesService } from '@shared/services/get-movies.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { SITEURLS } from '@shared/siteUrls';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  constructor(public getMoviesService: GetMoviesService) { }
  movies$: Observable<object>;
  // private searchTerms = new Subject<string>();
  siteUrls = SITEURLS;
  @Output() emitToHeader = new EventEmitter();
  
  search(term: string): void {
    // this.searchTerms.next(term);
    this.getMoviesService.search(term);
  }
  
  initialiseSearch(): void {
    this.movies$ = this.getMoviesService.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.getMoviesService.getMovies()),
    ) 
  }

 
  ngOnInit() {
    this.initialiseSearch(); 
  }
 
}
