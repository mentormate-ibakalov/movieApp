// import { LoginComponent } from './user-module/login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'movie/:id', component: MovieComponent},
  // { path: 'login', component: LoginComponent},
  { path: 'user', loadChildren: './user-module/user.module#UserModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

export const RoutingComponents = [ HomeComponent, MovieComponent ];
