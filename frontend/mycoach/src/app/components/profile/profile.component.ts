import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EditDialogComponent } from './profilecomponents/edit-dialog/edit-dialog.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { profileService } from 'src/app/services/profile.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments.prod';

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
  checkActive: FormGroup;
  bgColor: string = 'bg-slate-400';
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);

  constructor(public http:HttpClient,public dialog: MatDialog, public Router: Router, private _formBuilder: FormBuilder,private authService:AuthService,private profileService:profileService) {
    this.checkActive = this._formBuilder.group({
      autoCheck: ['', Validators.requiredTrue],
    });

  }

  ngOnInit() {
    this.getUserInfos();
    this.checkBg();
  }


  getUserInfos() {
    this.username = this.authService.UserInfo.username;
    this.surname = this.authService.UserInfo.surname;
    this.email = this.authService.UserInfo.email;
    this.statusUser = this.authService.UserInfo.statusUser;
    this.id = this.authService.UserInfo.id;
    this.city = this.authService.UserInfo.city
    this.textUser = this.authService.UserInfo.textUser;
    this.image = this.authService.UserInfo.profileImage;
    this.userAge = this.authService.UserInfo.age;
    this.userPhone = this.authService.UserInfo.phone;
    this.userInterests = this.authService.UserInfo.userInterests;

    if (this.statusUser == 1) {
      this.profilePage = true;
      this.coachPage = false;
    } else if (this.statusUser == 2) {
      this.coachPage = true;
      this.profilePage = false;
    };

  }

  updateText(textTemplate:any,id:number,text:string){
    console.log(id,text)
    this.http.put<any>(environment.usersApi + id, {
      id:id,
      text:text
    })
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
    };
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
  }


  changeBg() {
    this.bgColor = 'bg-red-300';
  }

  saveBg() {
    localStorage.setItem('bgProfile', this.bgColor);
    this.closeEdit();
  }


  checkBg() {
    let bgColor = localStorage.getItem('bgProfile');
    if (bgColor != undefined) {
      this.bgColor = bgColor;
    };
    
  }




}