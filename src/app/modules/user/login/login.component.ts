import { SITEURLS } from '@shared/site-urls.config';
import { MessageService, AuthService } from '@shared/services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginObject } from '@shared/interfaces';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService, 
    private messageService: MessageService,
    private router: Router
    ) {}
    
  mouseOverLogin: boolean = false;
  loginForm: FormGroup;
  siteUrls:object = SITEURLS;
  
  onSubmit(loginObject: LoginObject): void {
    if (!this.loginForm.invalid) {
      this.authService.userLogIn(loginObject).subscribe(
        res => {
          this.messageService.handleSuccess('Login successful');
          this.router.navigate(['user/details']);
        }
      )
    }
  }

  ngOnInit():void {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      userPass: new FormControl(null, Validators.required)
    });
  }
}
