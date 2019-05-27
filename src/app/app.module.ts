import { MovieCategoriesModule } from './modules/movies-categories/movies-categories.module';
import { MoviesDisplayModule } from '@modules/movies-display/movies-display.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { SearchComponent } from '@shared/components/search/search.component';
import { SearchResultComponent } from '@shared/components/search-result/search-result.component';
import { MessageComponent } from './shared/components/message/message.component';
import { MessageAnimationDirective } from '@shared/directives/message-animation.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { UserHeader } from '@shared/providers/app.user-header';
// import { CacheInterceptor } from '@shared/providers/app-cache-interceptors';
 




@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    SearchComponent,
    SearchResultComponent,
    HeaderComponent,
    MessageComponent,
    MessageAnimationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MoviesDisplayModule,
    MovieCategoriesModule
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: UserHeader, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true } 
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
