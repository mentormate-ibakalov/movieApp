import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Observable, Subject } from 'rxjs';
import { Movies } from '../../interfaces/movies';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public SearchService: SearchService) { }
  private searchTerms = new Subject<string>();
  movies: object;

  search(term: string): void {
    this.searchTerms.next(term);
  }




  initialiseSearch(): Observable<Movies<object>> {
    let mov = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.SearchService.searchMovies(term))
    )
    return mov;

  }

  ngOnInit() {
    this.initialiseSearch().subscribe(movies => {
      this.movies = movies;
    });
  }

}
