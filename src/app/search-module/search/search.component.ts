import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../search.service';
import { Observable, Subject } from 'rxjs';
// import { Movies } from '../../interfaces/movies';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public SearchService: SearchService) { }
  movies$: Observable<object>;
  private searchTerms = new Subject<string>();
  // movies: object;

  // @Output() outputToparent = new EventEmitter();


  search(term: string): void {
    this.searchTerms.next(term);
  }

  initialiseSearch(): void {
    this.movies$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.SearchService.searchMovies(term)),
    )   
    this.SearchService.passSearchData(this.movies$);
  }

  // this.SearchService.searchMovies(term)   
  // this.outputToparent.emit(this.movies$);

  ngOnInit() {
    this.initialiseSearch();
  }

}
