import { PaginationComponent } from '@shared/components';
import { CategoryRoutes } from './categories-routing.module';
import { MovieComponent } from '@modules/categories/movie/movie.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { SpecialCategoriesComponent } from './special-categories/special-categories.component';



@NgModule({
  declarations: [
    MovieComponent,
    FavoriteMoviesComponent,
    SpecialCategoriesComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CategoryRoutes),
  ],
  exports: [
    MovieComponent,
    FavoriteMoviesComponent
  ],
})

export class CategoriesModule { }
