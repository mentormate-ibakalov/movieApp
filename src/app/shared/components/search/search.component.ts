import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GetMoviesService } from '@shared/services/get-movies.service';
import { Observable } from 'rxjs';
import { SITEURLS } from '@shared/siteUrls';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  constructor(
    public getMoviesService: GetMoviesService
    ) { }
  movies$: Observable<object>;
  // private searchTerms = new Subject<string>();
  siteUrls = SITEURLS;
  showList = false;
  value:string = '';

  @Output() emitToHeader = new EventEmitter();
  
  search(): void {
    // console.log(this.value)
    // this.searchTerms.next(term);
    this.getMoviesService.search(this.value);
  }
  
  hideDropdown(val) {
    this.showList = false;
    // console.log(val);
    this.value = '';
  }
  initialiseSearch(): void {
    this.movies$ = this.getMoviesService.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.getMoviesService.searchMovies(term)),
    ) 
  }

 
  ngOnInit() {
    this.initialiseSearch(); 
  }
 
}
