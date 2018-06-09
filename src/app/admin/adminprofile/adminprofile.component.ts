import { Component, OnInit } from '@angular/core';
import { OauthService } from '../../core/authentication/oauth.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  constructor(private _oauth: OauthService) { }

  ngOnInit() {
    this._oauth.getuser()
      .subscribe (
        (res) => {
          console.log(res);
        },
        err => console.log(err)
      )
  }

}
