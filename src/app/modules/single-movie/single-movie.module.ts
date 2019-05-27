import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from '@modules/single-movie/movie/movie.component';
import { RouterModule } from '@angular/router';
import { SingleMovieRoute } from './single-movie.routes';

@NgModule({
  declarations: [MovieComponent],
  imports: [
    CommonModule,
    // MovieComponent,
    RouterModule.forChild(SingleMovieRoute)
  ],
  exports: [
    MovieComponent,
    // SingleMovieRoute
  ]
})

export class SingleMovieModule { }
