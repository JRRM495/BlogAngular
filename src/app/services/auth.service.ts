import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RegistrationInfo } from '../registration-info';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
// import {LocalStorageService} from 'ngx-webstorage';
import {LoginInfo} from 'src/app/login-info';
import {JwtAutResponse} from 'src/app/jwt-aut-response';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerURL = "https://blog2-env.eba-23tqkp28.us-east-2.elasticbeanstalk.com + '/api/auth/signup';
  loginURL = "https://blog2-env.eba-23tqkp28.us-east-2.elasticbeanstalk.com + '/api/auth/login';
  constructor(private http: HttpClient,
   private router: Router) { }

  //calls heroku API to register the user 
  register(regObject: RegistrationInfo) : Observable<any> {
    return this.http.post(this.registerURL, regObject);
  }

  //tries to log user in, if successful stores autentication token in local storage 
  login(loginObject: LoginInfo): Observable<boolean> {
    console.log(this.loginURL);
    return this.http.post<JwtAutResponse>(this.loginURL, loginObject).pipe(map(data => {
      localStorage.setItem('authenticationToken', data.authenticationToken);
      localStorage.setItem('username', data.username);

      // this.localStoraqeService.store('authenticationToken', data.authenticationToken);
      // this.localStoraqeService.store('username', data.username);
      return true;
    }));
  }




  isAuthenticated(): boolean {
    // return this.localStoraqeService.retrieve('username') != null;
    return localStorage.getItem("username") != null;
  }

  logout() {
    localStorage.removeItem('authenticationToken');
    localStorage.removeItem('username');
    localStorage.clear();
 

    // this.localStoraqeService.clear('authenticationToken');
    // this.localStoraqeService.clear('username');
  }


}
