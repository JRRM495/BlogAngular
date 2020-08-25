import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {LoginInfo} from 'src/app/login-info';
import {AuthService} from 'src/app/services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-log-guest',
  templateUrl: './log-guest.component.html',
  styleUrls: ['./log-guest.component.css']
})
export class LogGuestComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: 'Guest',
      password: 'Guest'
 
    });
   }

  ngOnInit(): void {
    
  }


  onSubmit() {
    let loginObject: LoginInfo = {
       username: "",
       password: ""
     }
 
     loginObject.username = "Guest"
     loginObject.password = "Guest"
 
     this.authService.login(loginObject).subscribe(data => {
       if (data) {
         alert("Thanks for logging in.")
         console.log('login success');
         this.router.navigateByUrl('/home');
       } else {
         alert("Sorry, those credentials were incorrect.")
         this.router.navigateByUrl('/home');
         console.log('Login failed');
       }
     });
   }




}
