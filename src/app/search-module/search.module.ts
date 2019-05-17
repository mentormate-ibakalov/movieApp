import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from '../app-routing.module';
import { SearchResultComponent } from './search-result/search-result.component';
// import { SearchService } from './../search-module/search.service';

@NgModule({
  declarations: [
    SearchComponent, 
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    SearchComponent,
    SearchResultComponent
  ],
})

export class SearchModule { }
