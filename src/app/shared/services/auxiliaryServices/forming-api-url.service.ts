import { Injectable } from '@angular/core';
import { APIURL } from '@shared/apiUrl';


@Injectable({
  providedIn: 'root'
})

export class FormingApiUrlService {
 
  constructor() { 

  // this.token = localStorage.getItem('token');
  // this.apiUrl = APIURL;
  }
  private token:string = localStorage.getItem('token');
  private apiUrl:Object = APIURL;

  singleMovie(id:number):string {
    return this.apiUrl['root'] + this.apiUrl['URLS']['single-movie'] + '/' + id + this.apiUrl['api_key'];
  }

  searchForMovies(term:string):string {
    return this.apiUrl['root'] + this.apiUrl['URLS']['search-movie'] + this.apiUrl['api_key'] + '&query=' + term.toLowerCase();
  }

  movies(term:string, page:number = 1):string {
    let getThePage:string = `&page=${page}`;
    return this.apiUrl['root'] + this.apiUrl['URLS'][term] + this.apiUrl['api_key'] + getThePage;
  }

  addFavoriteMovies():string  {
    return this.apiUrl['root'] + this.apiUrl['URLS']['add-favorite-movies'] + this.apiUrl['api_key'] + '&session_id=' + this.token;
  }

  getFavoriteMovies():string  {
    return this.apiUrl['root'] + this.apiUrl['URLS']['favorite-movies'] + this.apiUrl['api_key'] + '&session_id=' + localStorage.getItem('token');
  }
}
