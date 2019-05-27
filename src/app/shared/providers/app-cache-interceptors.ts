import { HttpCacheService } from '@shared/services/http-cache.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
    constructor(private cacheService: HttpCacheService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.method !== 'GET') {
            console.log(`invalidating cache ${req.method} ${req.url}`)
            this.cacheService.ivalidateCache();
            return next.handle(req);
        }

        const cachedResponse: HttpResponse<any> = this.cacheService.get(req.url);

        if (cachedResponse) {
            console.log(`returning cached response ${cachedResponse['url']}`);
            console.table(cachedResponse);
            return of(cachedResponse);
        }

        return next.handle(req)
            .pipe(
                tap(event => {
                    if (event instanceof HttpResponse) {
                        console.log(`adding item to cache ${req.url}`);
                        this.cacheService.put(req.url, event);
                    }
                })
            )

    }
}