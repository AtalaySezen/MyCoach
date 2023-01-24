import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EditDialogComponent } from './profilecomponents/edit-dialog/edit-dialog.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { profileService } from 'src/app/services/profile.service';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],

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
  image: any;
  userInterests: any;
  userAge: number;
  userPhone: any;
  profilePage: boolean = false;
  coachPage: boolean = false;
  hideMyData: boolean = false;
  autoActive: String = "Aktif Et";
  checkActive: FormGroup;
  bgColor: string = 'bg-slate-400';
  loading: boolean = false;
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);

  fontStyleControl: FormControl;
  fontStyle?: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogRef: MatDialogRef<EditDialogComponent>,
    public http: HttpClient,
    public dialog: MatDialog,
    public Router: Router,
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private profileService: profileService,
    private snackBar: SnackbarService
  ) {
    this.checkActive = this._formBuilder.group({
      autoCheck: ['', Validators.requiredTrue],
    });
    this.fontStyleControl = new FormControl('');

  }

  ngOnInit() {
    this.getUserData();
    this.getUserInfos();
    this.checkBg();
    this.image = 'https://avatars.githubusercontent.com/u/88587309?v=4'
    console.log(this.coachPage);
    this.coachPage == true;
  }

  //Get User Data From API
  async getUserData() {
    await this.http.get('http://localhost:3000/users').subscribe(data => {
      Object.entries(data).forEach(a => {
        a.map(x => {
          if (this.id == x.id) {
            this.city = x.city;
            this.textUser = x.textUser;
            this.image = x.profileImage;
            this.userAge = x.age;
            this.password = x.password;
            this.userPhone = x.userPhone;
            this.userInterests = x.userInterests;

          }
        })
      })
    })
  }

  //Local Storage
  getUserInfos() {
    this.username = this.authService.UserInfo.username;
    this.surname = this.authService.UserInfo.surname;
    this.email = this.authService.UserInfo.email;
    this.id = this.authService.UserInfo.id;
    this.statusUser = this.authService.UserInfo.statusUser;
    if (this.statusUser == 1) {
      this.profilePage = true;
      this.coachPage = false;
    } else if (this.statusUser == 2) {
      this.coachPage = true;
      this.profilePage = false;
    };
  }


  //Edit Dialog
  editProfile(id: number, username: string, surname: string, password: any, email: any, statusUser: number, profileImage: string, age: number, city: string, textUser: string, userPhone: any, userInterests: any) {
    console.log(userPhone);
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '100%',
      height: 'auto',
      data: {
        title: 'Edit Profile',
        id: id,
        username: username,
        surname: surname,
        password: password,
        email: email,
        statusUser: statusUser,
        profileImage: profileImage,
        age: age,
        city: city,
        textUser: textUser,
        userPhone: userPhone,
        userInterests: userInterests,
      },
    });
    dialogRef.afterClosed().subscribe(data => {
      this.getUserData();
    })
  }

  //Auto Logout
  activeAutoLogout() {
    localStorage.setItem('autoout', 'true');
    let checkLocalStorage = localStorage.getItem('autoout');
    var waitTime = 30 * 60 * 1000;

    if (checkLocalStorage == "true") {
      setTimeout(() => {
        localStorage.clear();
        this.Router.navigate(['']);
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
    if (localStorage.getItem('bgProfile') == undefined) {
      this.bgColor = 'bg-slate-400';
    } else {
      return
    }
  }

  changeBg(value: any) {
    this.bgColor = value;
  }

  saveBg() {
    localStorage.setItem('bgProfile', this.bgColor);
    this.closeEdit();
  }


  checkBg() {
    let bgColor = localStorage.getItem('bgProfile');
    if (bgColor != undefined) {
      this.bgColor = bgColor;
    } else {
      this.bgColor = this.bgColor;
    }
  }

  resetSettings() {
    localStorage.removeItem('bgProfile');
    window.location.reload();
    this.checkBg();
  }

  newTarget() {

  }


  previewPhoto: any;
  showPhoto(templateRef: any, image: any) {
    console.log(image.src)
    this.previewPhoto = image.src
    console.log(this.previewPhoto)
    const dialogRef = this.dialog.open(templateRef, {
      width: '100%',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  //Dark Mode Choose
  darkMode() {
    let choosenTheme = this.fontStyleControl.value;
    if (choosenTheme == 'dark') {
      console.log('dark');
    } else {
      console.log('white');
    }
  }





}