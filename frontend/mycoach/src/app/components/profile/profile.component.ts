import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  username: string;
  surname: string;
  password: any;
  email: any;
  statusUser: number;
  id: number;
  city: string;
  image: string;
  profilePage: boolean = false;
  coachPage: boolean = false;
  constructor() { }

  ngOnInit() {
    this.getUserInfos();
  }

  getUserInfos() {
    //service'e ayrılacak
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    this.username = loggedUser.username;
    this.surname = loggedUser.surname;
    this.statusUser = loggedUser.statusUser;
    this.id = loggedUser.id;
    this.city = loggedUser.city;
    this.image = loggedUser.profileImage
    if (this.statusUser == 1) {
      this.profilePage = true;
      this.coachPage = false;
    } else {
      this.coachPage = true;
      this.profilePage = false;
    }
  }



}
