import { AuthGuard } from '@shared/services/auth.guard';
import { LoginComponent } from "./login/login.component";
import { UserDetailsComponent } from './user-details/user-details.component';
import { RegisterComponent } from './register/register.component';

export const UserRoutes = [
    { path: 'login', component: LoginComponent, data: { animations: 'isLeft' } },
    { path: 'register', component: RegisterComponent, data: { animations: 'isRight' } },
    { path: 'details', component: UserDetailsComponent, canActivate: [AuthGuard], data: { animations: 'isRight' } },
]