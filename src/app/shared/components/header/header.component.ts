import { SITEURLS } from '@shared/siteUrls';
import { AuthService } from '@modules/user/auth.service';
// import { GetMoviesService } from '@shared/services/get-movies.service';
import { Component, OnInit } from '@angular/core';

// import { Movies } from '@shared/interfaces/movies';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {


  constructor(private authService: AuthService) {}
   
  isLoggedIn: boolean;
  siteUrls:object = SITEURLS;
  checkIfLoggedIn():void {
    this.authService.currentLoginStatus.subscribe(
      res => this.isLoggedIn = res
      )
  }
  logout():void {
    this.authService.setStatus(false);
    localStorage.removeItem('token');
  }
  
  //  searchMovies(event:string) {
  //   console.log(event);
  // }
  // movies: object;
  // moviesFromSearch: Movies<Object>;

  // getSearchVal(val:Movies<Object>): void {
  //   this.moviesFromSearch = val;
  // }

  ngOnInit() {
    this.checkIfLoggedIn();
  }
}
