import { KebapTopNormalPipe } from '@shared/pipes/kebap-top-normal.pipe';
import { HomeComponent } from '@modules/home/home.component';
import { HomeRoutes } from './home.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GetMoviesComponent } from '@shared/components';



@NgModule({
  declarations: [
    HomeComponent,
    GetMoviesComponent,
    KebapTopNormalPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
  ],
  exports: [
    HomeComponent,
    RouterModule
  ]
})



export class HomeModule { }
