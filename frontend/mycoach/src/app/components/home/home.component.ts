import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  userLogged: boolean = false;


  ngOnInit() {
    this.checkUserLogged();
  }

  checkUserLogged() {
    if (localStorage.getItem('userLogged') == "true") {
      this.userLogged = true;
    }
  }


}
