import { GetMoviesService } from '@shared/services/get-movies.service';
import { Component, OnInit, Input } from '@angular/core';
import { SITEURLS } from '@shared/siteUrls';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  // @Input('searchResult') movies$:object;
  constructor(private GetMoviesService: GetMoviesService) {}
  movies$: Observable<Object>;
  siteUrls = SITEURLS
  // private searchTerms = new Subject<any>();

  // this.searchTerms.next(term);

  // initialiseSearch(): void {
  //   this.movies$ = this.searchTerms.pipe(
  //   ) 
  // }



  ngOnInit() {
    // console.log(this.GetMoviesService.searchObj.subscribe(ss => console.log(ss)))
    // console.log(this.GetMoviesService.searchObj)
    // this.movies$ = this.GetMoviesService.searchObj;
    // this.movies$.subscribe(dd=>console.log(dd));
  }

}
