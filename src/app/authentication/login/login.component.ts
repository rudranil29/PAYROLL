import { Component, OnInit } from '@angular/core';
import { OauthService } from '../../core/authentication/oauth.service';
import { User } from '../../models/user';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};
  public Error: boolean = false;
  public Message: string;
  constructor(private _oauth: OauthService) { }

  ngOnInit() {
  }

  loginUser() {
    
    this._oauth.loginUser(this.loginUserData)
      .subscribe (
        (res:User) => {
          localStorage.setItem('token',res.token)
          console.log(res);
        },
        err => console.log(err)
      )
  }
}
