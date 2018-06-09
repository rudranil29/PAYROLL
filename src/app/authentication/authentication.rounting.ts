import { Routes, RouterModule } from '@angular/router';
// import Authentication
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


const routes: Routes = [
    
    //Authentication Routes
    { path: '', redirectTo: 'user/login', pathMatch: 'full'},
    { path: 'user/login', component: LoginComponent },
    { path: 'user/forgot_password', component: ForgotpasswordComponent }

];

export const AuthenticationRouting = RouterModule.forRoot(routes);
