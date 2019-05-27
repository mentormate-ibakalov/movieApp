import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule, RoutingComponents } from '../app-routing.module';
import { MovieCategoriesModule } from '@modules/movies-categories/movies-categories.module';
import { MoviesDisplayModule } from '@modules/movies-display/movies-display.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '@shared/components/header/header.component';
import { SearchComponent } from '@shared/components/search/search.component';
import { SearchResultComponent } from '@shared/components/search-result/search-result.component';
import { MessageComponent } from '@shared/components/message/message.component';
import { MessageAnimationDirective } from '@shared/directives/message-animation.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    SearchResultComponent,
    MessageAnimationDirective,
    MessageComponent,
    RoutingComponents
  ],
  imports: [
    CommonModule,
    MoviesDisplayModule,
    MovieCategoriesModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    // MoviesDisplayModule,
    // MovieCategoriesModule,
    HeaderComponent,
    SearchComponent,
    SearchResultComponent,
    MessageComponent,
    MessageAnimationDirective,
    AppRoutingModule,
    RoutingComponents
  ],
})

export class SharedModule { }
