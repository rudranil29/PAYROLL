import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';

@Injectable()
export class OauthService {

  private _loginUrl = "http://139.59.14.81:3000/api/v1/login"
  //private _loginUrl = "https://jsonplaceholder.typicode.com/users";
  private userurl = "http://139.59.14.81:3000/api/v1/user";


  constructor(private http: HttpClient ) { }

  loginUser(userdata) {
    return this.http.post<User>(this._loginUrl,userdata);
  }

  getuser() {
    return this.http.get<any>(this.userurl);
  }

  getToken() {
    return localStorage.getItem('token')
  }
}