import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {LoginInfo} from 'src/app/login-info';
import {AuthService} from 'src/app/services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { 
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
 
    });

  }

  ngOnInit(): void {
  }

  onSubmit() {
   let loginObject: LoginInfo = {
      username: "",
      password: ""
    }

    loginObject.username = this.loginForm.get('username').value;
    loginObject.password = this.loginForm.get('password').value;

    this.authService.login(loginObject).subscribe(data => {
      if (data) {
        console.log('login success');
        this.router.navigateByUrl('/home');
      } else {
        console.log('Login failed');
      }
    });
  }

}
