import { SITEURLS } from '@shared/site-urls.config';
import { AuthService } from '@shared/services/auth.service';
import { Component, Input } from '@angular/core';
import { User } from '@shared/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  constructor(
    private authService: AuthService,
  ) { }


  @Input() isLoggedIn: boolean;
  @Input() userDetails: User;

  siteUrls: object = SITEURLS;

  logout(): void {
    this.authService.logOut();
  }
}
