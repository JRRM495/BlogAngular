import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {RegistrationInfo} from 'src/app/registration-info'
import {AuthService} from 'src/app/services/auth.service'
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
    this.registerForm = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });;
   }

  ngOnInit(): void {
  }

  onSubmit() {
   let registrationInfo: RegistrationInfo ={
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
    }
 
   registrationInfo.username = this.registerForm.get('username').value;
   registrationInfo.email = this.registerForm.get("email").value;
    registrationInfo.password = this.registerForm.get("password").value;
    registrationInfo.confirmPassword = this.registerForm.get("confirmPassword").value;
    //use the form data to call the api using service class
    this.authService.register(registrationInfo).subscribe(data => {
      console.log('reg successful');
      //alert("Thank you for signing up! You can now log in.");
      this.router.navigateByUrl('/register-success');
    }, error => {
      console.log('reg failed');
      alert("It looks like something went wrong. Please try again.");
    });
  }

}
