import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent, SearchComponent, SearchResultComponent, MessageComponent } from '@shared/components';
import { MessageAnimationDirective } from '@shared/directives/message-animation.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    SearchResultComponent,
    MessageAnimationDirective,
    MessageComponent,
    // GetMoviesComponent,
    // HomeComponent,
    // KebapTopNormalPipe,
    // PaginationComponent,
    // KebapTopNormalPipe
  ],

  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    // AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    // KebapTopNormalPipe,
    // GetMoviesComponent,
    HeaderComponent,
    BrowserAnimationsModule,
    SearchComponent,
    SearchResultComponent,
    MessageComponent,
    MessageAnimationDirective,
    // PaginationComponent,
    // AppRoutingModule,
    // KebapTopNormalPipe,
    // HomeComponent,
    RouterModule
  ],
})

export class SharedModule { }
