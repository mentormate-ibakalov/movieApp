import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
// import { SearchService } from './../search-module/search.service';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SearchComponent
  ],
})

export class SearchModule { }
