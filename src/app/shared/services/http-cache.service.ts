import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {
  constructor() { }
  private requests: any;

  put(url: string, response: HttpResponse<any>):void {
    this.requests[url] = response;
  }

  get(url: string):any | undefined {
    return this.requests[url];
  } 

  ivalidateCache(): void {
    this.requests = {};
  }
}
