import { HomeComponent } from '@modules/movies-display/home/home.component';
import { GetMoviesComponent } from '@shared/components/get-movies/get-movies.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    // MovieComponent,
    GetMoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    // RouterModule.forChild(MoviesRoutes)
  ],
  exports: [
    HomeComponent,
    // MovieComponent,
    GetMoviesComponent
  ],
})
export class MoviesDisplayModule { }
