import { AuthGuard } from '../../shared/services/auth.guard';
import { LoginComponent } from "./login/login.component";
import { UserDetailsComponent } from './user-details/user-details.component';
import { FavoriteMoviesComponent } from '@modules/user/favorite-movies/favorite-movies.component';
import { RegisterComponent } from './register/register.component';



export const UserRoutes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'details', component: UserDetailsComponent, canActivate: [AuthGuard] },
    { path: 'favorite', component: FavoriteMoviesComponent, canActivate: [AuthGuard] }
]