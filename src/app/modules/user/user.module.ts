import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutes } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { UserHeader } from '@shared/providers/app.user-header';



@NgModule({
  declarations: [
    LoginComponent,
    UserDetailsComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: UserHeader, multi: true }],
  exports: [
    LoginComponent,
    RegisterComponent,
  ]
})

export class UserModule { }
