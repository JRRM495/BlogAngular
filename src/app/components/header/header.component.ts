import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout();
    alert("You are now logged out.")
    this.router.navigateByUrl("/home")
  }

}
