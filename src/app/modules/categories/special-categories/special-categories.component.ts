import { AuthService } from '@shared/services/auth.service';
import { SITEURLS } from '@shared/siteUrls';
import { Movies } from '@shared/interfaces/movies';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MessageService } from '@shared/services/message.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GetMoviesService } from '@shared/services/get-movies.service';
import { ChangeDetectionStrategy } from '@angular/core';



@Component({
  selector: 'app-special-categories',
  templateUrl: './special-categories.component.html',
  styleUrls: ['./special-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class SpecialCategoriesComponent implements OnInit {
  constructor(
    private getMoviesService: GetMoviesService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private changeDetectorRef: ChangeDetectorRef
    ) { 

      this.route.paramMap.subscribe((params: ParamMap) => {
          let special = params.get('special');
          this.category = special;
          this.getMoviesByCategory();
      })
      // this.category = this.route.snapshot.paramMap.get('special');
    }
    
    movie: Movies<Object>;
    siteUrls = SITEURLS;
    category:string;
    checkLoggedIn:boolean;


    isLoggedIn() {
      this.authService.currentLoginStatus.subscribe( msg=> {
      this.checkLoggedIn = msg;
      })
    }
    
    paginating(page:number) {
      this.getMoviesByCategory(page);
    }
    
    getMoviesByCategory(page?): void  {
    this.getMoviesService.getMoviesByCategory(this.category, page).subscribe( 
    response => {
      this.movie = response 
      this.changeDetectorRef.markForCheck();
    }
    
    );
    }

    addFavorite(id: number) {
      if (!this.checkLoggedIn) {
        this.messageService.handleError('You need to be logged in to save movies to favorite');
        this.router.navigate(['user/login']);
      }
      else this.getMoviesService.addFavoriteMovies(id).subscribe();
    }

  ngOnInit() {
    this.getMoviesByCategory();
    this.isLoggedIn();
  }

}
