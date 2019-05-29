import { Router } from '@angular/router';
// import { ChangeDetectionStrategy } from '@angular/core';
import { SITEURLS } from '@shared/siteUrls';
import { AuthService } from '@shared/services/auth.service';
import { Component } from '@angular/core';
import { userObject } from '@shared/interfaces/userObject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent  {


  constructor(
    private authService: AuthService,
    private router: Router
    ) {}
   
  isLoggedIn: boolean;
  siteUrls:object = SITEURLS;
  userDetails:userObject

  checkIfLoggedIn():void {
    this.authService.currentLoginStatus.subscribe (
      res => {
        this.isLoggedIn = res
        if (res) {
          this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
        }
      }
    )
  }
  
  logout():void {
    this.authService.setStatus(false);
    localStorage.removeItem('token');
    localStorage.removeItem('userDetails');
  }

  ngOnInit() {
    this.checkIfLoggedIn();
  }
}
