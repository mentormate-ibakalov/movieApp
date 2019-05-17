import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRoutes } from './user.routes';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes)
  ],
  exports: [
    LoginComponent
  ]
})
export class UserModule { }
