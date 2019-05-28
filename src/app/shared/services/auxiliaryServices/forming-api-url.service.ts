import { Injectable } from '@angular/core';
import { APIURL } from '@shared/apiUrl';


@Injectable({
  providedIn: 'root'
})

export class FormingApiUrlService {
  constructor() { 
  }

  private apiUrl: Object = APIURL;

  singleMovie(id:number):string {
    return this.apiUrl['root'] + this.apiUrl['URLS']['single-movie'] + '/' + id + this.apiUrl['api_key'];
  }

  searchForMovies(term:string):string {
    return this.apiUrl['root'] + this.apiUrl['URLS']['search-movie'] + this.apiUrl['api_key'] + '&query=' + term.toLowerCase();
  }

  movies(term:string):string {
    return this.apiUrl['root'] + this.apiUrl['URLS'][term] + this.apiUrl['api_key'];
  }

  // let formUrl = `${this.apiUrl['root'] + this.apiUrl['URLS'][term] + this.apiUrl['api_key']}`;
  // let formUrl = `${this.apiUrl['root'] + this.apiUrl['URLS']['single-movie'] + '/' + id + this.apiUrl['api_key']}`;
  // let formUrl = `${this.apiUrl['root'] + this.apiUrl['URLS']['search-movie'] + this.apiUrl['api_key'] + '&query=' + term.toLowerCase()}`;
}
