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
  hideNotification:boolean = false;
  menuMobile:boolean = false;
  coachLogged:boolean = false;

  constructor(private router: Router,private authService:AuthService) { }

  ngOnInit() {
    this.checkUserLogged();
    this.checkCoachLogged();
  }

  checkUserLogged() {
    if (localStorage.getItem('userLogged') == "true") {
      this.userLogged = true;
    }
  }

  checkCoachLogged(){
    if(this.authService.UserInfo.statusUser == 2){
      this.coachLogged = true;
    }else{
      this.coachLogged = false;
    }
  }

  logOut() {
    this.authService.Logout();
  }


  showNotification(){
    this.hideNotification = !this.hideNotification;
  }



  mobileMenu(){
    let mobileMenu = document.getElementById('mobile-menu-2');
    mobileMenu.classList.toggle('hidden')
  }


}
