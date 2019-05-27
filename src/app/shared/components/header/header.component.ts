import { SITEURLS } from '@shared/siteUrls';
import { AuthService } from '@shared/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {


  constructor(
    private authService: AuthService
    ) {}
   
  isLoggedIn: boolean;
  siteUrls:object = SITEURLS;
  checkIfLoggedIn():void {
    this.authService.currentLoginStatus.subscribe(
      res => this.isLoggedIn = res
      )
  }
  logout():void {
    this.authService.setStatus(false);
    localStorage.removeItem('token');
  }
  ngOnInit() {
    this.checkIfLoggedIn();
  }
}
