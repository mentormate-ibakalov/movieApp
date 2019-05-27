import { HomeComponent } from '@shared/components/home/home.component';
import { GetMoviesComponent } from '@shared/components/get-movies/get-movies.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '@shared/components/header/header.component';
import { SearchComponent } from '@shared/components/search/search.component';
import { SearchResultComponent } from '@shared/components/search-result/search-result.component';
import { MessageComponent } from '@shared/components/message/message.component';
import { MessageAnimationDirective } from '@shared/directives/message-animation.directive';
import { KebapTopNormalPipe } from '@shared/pipes/kebap-top-normal.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    SearchResultComponent,
    MessageAnimationDirective,
    MessageComponent,
    GetMoviesComponent,
    HomeComponent,
    KebapTopNormalPipe
    // KebapTopNormalPipe
  ],

  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  
  exports: [
    // KebapTopNormalPipe,
    GetMoviesComponent,
    HeaderComponent,
    SearchComponent,
    SearchResultComponent,
    MessageComponent,
    MessageAnimationDirective,
    AppRoutingModule,
    KebapTopNormalPipe,
    HomeComponent
  ],
})

export class SharedModule { }
