import { MessageService } from '@shared/services/message.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginObject } from '@shared/interfaces/loginObj';
import { AuthService } from '@modules/user/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private AuthService: AuthService, 
    private MessageService: MessageService,
    private Router: Router
    ) { }
    
  mouseOverLogin: boolean = false;
  loginForm: FormGroup;

  onSubmit(loginObject: LoginObject): void {
    if (!this.loginForm.invalid) {
      this.AuthService.userLogIn(loginObject).subscribe(
        res => {
          this.MessageService.handleSuccess('Login successful');
          localStorage.setItem('token', res['msg']);
          this.AuthService.setStatus(true);
          this.Router.navigate([ 'user/details' ]);
        },
        err => {
          this.MessageService.handleError(err);
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
