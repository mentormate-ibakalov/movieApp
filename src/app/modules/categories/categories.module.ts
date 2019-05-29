import { CategoryRoutes } from './movies.routes';
import { MovieComponent } from '@modules/categories/movie/movie.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { SpecialCategoriesComponent } from './special-categories/special-categories.component';
import { PaginationComponent } from '@shared/components/pagination/pagination.component';

// import { SharedModule } from '@shared/shared.module';
// import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    MovieComponent,
    FavoriteMoviesComponent,
    SpecialCategoriesComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    // SharedModule,
    RouterModule.forChild(CategoryRoutes)
  ],
  exports: [
    MovieComponent,
    FavoriteMoviesComponent
  ],
})

export class CategoriesModule { }
