// import { MoviesDisplayModule } from './modules/movies-display/movies-display.module';
import { HomeComponent } from '@modules/movies-display/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectiveStrategyService } from '@shared/services/selective-strategy.service';




const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'movie', loadChildren: '@modules/single-movie/single-movie.module#SingleMovieModule'},
  // { path: 'movies', loadChildren: './modules/movies-display/movies-display.module#MoviesDisplayModule'},
  { path: 'user', 
    data: { preload: true },
    loadChildren: '@modules/user/user.module#UserModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: SelectiveStrategyService})
  ],
  exports: [RouterModule]
})



export class AppRoutingModule { }

export const RoutingComponents = [  ];
