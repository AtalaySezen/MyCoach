import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EditDialogComponent } from './profilecomponents/edit-dialog/edit-dialog.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
  bgColor: string = 'bg-slate-400';
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);

  constructor(public dialog: MatDialog, public Router: Router, private _formBuilder: FormBuilder) {
    this.checkActive = this._formBuilder.group({
      autoCheck: ['', Validators.requiredTrue],
    });

  }

  ngOnInit() {
    this.getUserInfos();
    this.checkBg();

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

  /*Profil Ayarları Diyalog */
  openEdit(templateRef: any) {
    const dialogRef = this.dialog.open(templateRef, {
      width: '100%',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.checkBg();
    });
  }

  closeEdit() {
    this.dialog.closeAll();
  }


  changeBg() {
    this.bgColor = 'bg-red-300'
  }

  saveBg() {
    localStorage.setItem('bgProfile', this.bgColor);
    this.closeEdit();
  }


  checkBg() {
    let bgColor = localStorage.getItem('bgProfile');
    if (bgColor != undefined) {
      this.bgColor = bgColor;
    }
  }




}