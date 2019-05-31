import { MessageService } from '@shared/services/message.service';
import { AuthService } from '@shared/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {

    
  this.authService.getStatus().subscribe(
      res => { 
        this.isLoggedIn = res; 
      })
  }

  isLoggedIn: boolean = false;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogedIn();
  }

  checkLogedIn(): boolean {
    if (!this.isLoggedIn) {
      this.router.navigate(['user/login']);
      this.messageService.handleError(`You need to be logged in to access this route`);
    }

    return this.isLoggedIn;
  }

}
