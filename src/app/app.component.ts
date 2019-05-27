import { AuthService } from '@shared/services/auth.service';
import { Router, NavigationStart, Event } from '@angular/router';
import { TokenCheckDummyService } from '@shared/services/token-check-dummy.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(
    private tokenCheckDummyService: TokenCheckDummyService, 
    private router: Router,
    private authService: AuthService
    ) { }

    private changeRoute() {
      this.router.events.subscribe( (event: Event) => {
        if (event instanceof NavigationStart) {
            this.tokenCheckDummyService.imitatingTokenExpirationcheck().subscribe(msg => {this.authService.setStatus(msg)})
          }})}

  ngOnInit(): void {
    this.changeRoute();
  }
}
