import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login-component/login.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent,
    LogoutButtonComponent,
  ],
})
export class LoginModule { }
