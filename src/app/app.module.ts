import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
// import { GetMoviesService } from './get-movies.service'
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';

// import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { GetMoviesComponent } from './get-movies/get-movies.component';
import { MovieComponent } from './movie/movie.component';
import { HeaderComponent } from './header/header.component';
import { SearchModule } from './search-module/search.module';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    // HomeComponent,
    // PopularMoviesComponent,
    GetMoviesComponent,
    MovieComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SearchModule
  ],
  providers: [
    // GetMoviesService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
