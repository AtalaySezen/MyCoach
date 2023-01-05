import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditDialogComponent } from './profilecomponents/edit-dialog/edit-dialog.component';
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
  textUser: any;
  statusUser: number;
  id: number;
  city: string;
  image: string;
  userInterests: any;
  userAge: number;
  userPhone: any;
  profilePage: boolean = false;
  coachPage: boolean = false;
  hideMyData: boolean = false;
  autoActive: String = "Aktif Et";
  checkActive: FormGroup

  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);

  constructor(public dialog: MatDialog, public Router: Router, private _formBuilder: FormBuilder) {
    this.checkActive = this._formBuilder.group({
      autoCheck: ['', Validators.requiredTrue],
    });

  }

  ngOnInit() {
    this.getUserInfos();
  }

  getUserInfos() {
    //service'e ayrılacak
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    this.username = loggedUser.username;
    this.surname = loggedUser.surname;
    this.email = loggedUser.email;
    this.statusUser = loggedUser.statusUser;
    this.id = loggedUser.id;
    this.city = loggedUser.city;
    this.textUser = loggedUser.textUser;
    this.image = loggedUser.profileImage;
    this.userAge = loggedUser.age;
    this.userPhone = loggedUser.phone;
    this.userInterests = loggedUser.userInterests;

    if (this.statusUser == 1) {
      this.profilePage = true;
      this.coachPage = false;
    } else if (this.statusUser == 2) {
      this.coachPage = true;
      this.profilePage = false;
    }
    console.log(this.coachPage)
    console.log(this.profilePage);
  }


  editText(text: string) {
    const dialogRef = this.dialog.open(EditDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  changeEmail() {
    if (confirm("Press a button!") == true) {
      console.log("You pressed OK!")
    } else {
      console.log("You ")
    }
  }


  //Auto Logout
  activeAutoLogout() {
    localStorage.setItem('autoout', 'true');
    let checkLocalStorage = localStorage.getItem('autoout');
    var waitTime = 30 * 60 * 1000;

    if (checkLocalStorage == "true") {
      setTimeout(() => {
        localStorage.clear();
        this.Router.navigate([''])
      }, waitTime);
    }


  }
  visibilityIcon: string = "visibility";
  //Hide Or Show User Infos
  hideInfos() {
    this.hideMyData = !this.hideMyData;
    if (this.hideMyData == true) {
      this.visibilityIcon = "visibility_off";
    } else {
      this.visibilityIcon = "visibility";
    }
  }







}