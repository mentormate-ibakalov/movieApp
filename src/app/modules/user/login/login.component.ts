import { SITEURLS } from '@shared/siteUrls';
import { MessageService } from '@shared/services/message.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginObject } from '@shared/interfaces/loginObj';
import { AuthService } from '@shared/services/auth.service';
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

          localStorage.setItem('token', '4179bafbbdcdc6dca8c4bf02f199c74848fc045d');
          localStorage.setItem('userDetails', JSON.stringify(res));

          this.authService.setStatus(true);
          this.router.navigate(['user/details']);
        },
        err => {
          this.messageService.handleError(err);
        }
      )
    }
  }

  ngOnInit() {
    let userName: FormControl = new FormControl(null, Validators.required);
    let userPass: FormControl = new FormControl(null, Validators.required);
    this.loginForm = new FormGroup({
      userName: userName,
      userPass: userPass
    });
  }

}
