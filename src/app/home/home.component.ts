import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search-module/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   movies$: Observable<object>;

  constructor(private SearchService: SearchService) { 
 
  }
  
  ngOnInit() {
    this.movies$ = this.SearchService.movies$;
  }

}
