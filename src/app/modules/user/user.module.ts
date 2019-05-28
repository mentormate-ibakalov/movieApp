import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRoutes } from './user.routes';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { UserHeader } from '@shared/providers/app.user-header';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FavoriteMoviesComponent } from '@modules/user/favorite-movies/favorite-movies.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [LoginComponent, UserDetailsComponent, FavoriteMoviesComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: UserHeader, multi: true} ],
  exports: [
    LoginComponent,
    RegisterComponent,
    FavoriteMoviesComponent
  ]
})

export class UserModule { }
