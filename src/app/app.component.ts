import { Router, NavigationStart, Event, RouterOutlet } from '@angular/router';
import { AuthService, TokenCheckDummyService } from '@shared/services';
import { Component, OnInit } from '@angular/core';
import { slider } from './app.route.animations';
import { User } from '@shared/interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slider ]
})

export class AppComponent implements OnInit {
  
  constructor(
    private tokenCheckDummyService: TokenCheckDummyService,
    private router: Router,
    private authService: AuthService
  ) { }

  isLoggedIn:boolean;
  userDetails:User;

  private _changeRoute() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.tokenCheckDummyService.imitatingTokenExpirationcheck().subscribe(
           msg => { 
             if (msg !== this.isLoggedIn)
             this.authService.setStatus(msg) 
          })
      }
    })
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animations'];
  }
  
  ngOnInit(): void {
    this._changeRoute();
    this.authService.getStatus().subscribe(res => { this.isLoggedIn = res; if (res) this.userDetails = JSON.parse(localStorage.getItem('userDetails'))})
  }
}
