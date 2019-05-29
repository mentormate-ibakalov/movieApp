import { SpecialCategoriesComponent } from './special-categories/special-categories.component';
import { AuthGuard } from '@shared/services/auth.guard';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { MovieComponent } from './movie/movie.component';


export const CategoryRoutes = [
    { path: 'single/:id', component: MovieComponent, data: { animations: 'isLeft' } },
    { path: 'favorite', component: FavoriteMoviesComponent, pathMatch: 'full', canActivate: [AuthGuard], data: { animations: 'isLeft' } },
    { path: ':special', component: SpecialCategoriesComponent, pathMatch: 'full',  data: { animations: 'isLeft' } },
]