import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
  constructor() {

  }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem("authenticationToken");
    console.log('jwt token ' + token);
    //if token is not present do nothing
    if (token) {
      let header = `Bearer ${token}`;
      console.log(header);
      const cloned = req.clone({
        headers: req.headers.set("Authorization",
          header)
      });

      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }

}