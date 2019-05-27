import { AuthService } from '@modules/user/auth.service';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '@shared/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   movies$: Observable<object>;
  //  @Input	
  

  constructor(
    private SearchService: SearchService,
    private authService: AuthService
    ) { }
  
    checkLoggedIn: boolean;

    isLoggedIn() {
      this.authService.currentLoginStatus.subscribe(msg=> {
      this.checkLoggedIn = msg;
      })
    }
  // this.authService.currentLoginStatus.subscribe(msg => {
  //   // if (!msg) {
  //   //    this.Router.navigate([ 'user/details' ]);
  //   // }
  // })
  ngOnInit() {
    this.isLoggedIn();
    this.movies$ = this.SearchService.movies$;
  }

}
