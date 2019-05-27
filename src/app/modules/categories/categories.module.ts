import { CategoryRoutes } from './movies.routes';
import { MovieComponent } from '@modules/categories/movie/movie.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { SharedModule } from '@shared/shared.module';
// import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    MovieComponent
  ],
  imports: [
    CommonModule,
    // SharedModule,
    RouterModule.forChild(CategoryRoutes)
  ],
  exports: [
    MovieComponent
  ],
})

export class CategoriesModule { }
