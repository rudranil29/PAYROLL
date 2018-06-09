import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationRouting } from './authentication.rounting';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRouting,
    FormsModule
  ],
  declarations: [LoginComponent, ForgotpasswordComponent, LogoutComponent]
})
export class AuthenticationModule { }
// export const AuthenticationComponent = [LoginComponent, ForgotpasswordComponent, LoginComponent];
