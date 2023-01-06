import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  userLogged: boolean = false;

  constructor(private router: Router,private authService:AuthService) { }

  ngOnInit() {
    this.checkUserLogged();
  }

  checkUserLogged() {
    if (localStorage.getItem('userLogged') == "true") {
      this.userLogged = true;
    }
  }

  logOut() {
    this.authService.Logout();
  }


}
