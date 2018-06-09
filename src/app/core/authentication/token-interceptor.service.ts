import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { OauthService } from './oauth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let oauthService = this.injector.get(OauthService)
    let tokenizedReq = req.clone ({
      setHeadears: {
        Authorization: `Bearer ${oauthService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
