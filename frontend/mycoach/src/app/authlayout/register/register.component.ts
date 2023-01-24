import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';
interface Ages {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  hide = true;
  hide2 = true;
  loading: boolean = false
  registerForm: FormGroup
  idCount: Array<any>;
  id: number;
  checkActive: FormGroup;

  ages: Ages[] = [
    { value: '1-3', viewValue: '1-3' },
    { value: '3-6', viewValue: '3-6' },
    { value: '6+', viewValue: '6+' },
  ];

  constructor(
    private http: HttpClient,
    public Router: Router,
    private dialog: MatDialog,
    private snackBar: SnackbarService) {

    {
      this.registerForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        surname: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        rePassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        checkbox: new FormControl(false, [Validators.requiredTrue])
      })
    }

  }

  ngOnInit() { }


  //Service'den alınacak.
  saveUser() {
    this.http.get('http://localhost:3000/users').subscribe(data => {
      this.id = Object.keys(data).length
      let username = this.registerForm.get('username')?.value;
      let surname = this.registerForm.get('surname')?.value;
      let password = this.registerForm.get('password')?.value;
      let email = this.registerForm.get('email')?.value;
      let statusUser = 1
      let profileImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
      let age = 0;
      let city = "Hangi Şehirde Yaşıyorsun?";
      let textUser = "Kendini Tanıtman için bir alan.";
      let mobil = "05555555555";
      let userInterests = "myCoach";
      console.log(this.id);
      this.http.post<any>(`http://localhost:3000/users`, {
        id: this.id + 1,
        username: username,
        surname: surname,
        password: password,
        email: email,
        statusUser: statusUser,
        profileImage: profileImage,
        age: age,
        city: city,
        textUser: textUser,
        mobil: mobil,
        userInterests: userInterests
      }).subscribe(data => {
        if (data) {
          this.snackBar.showNotification('Hesabınız Başarıyla Oluşturuldu', 'Kapat');
          this.Router.navigate(['/verify']);
          console.log("ok")

        } else {
          this.snackBar.showNotification('Bir Hata Var', 'Kapat');
          console.log("hata")
        }
      }, err => console.log(err))

    })
  }

  //Open nondisclosure agreement
  openAgreement(template: any) {
    let dialogRef = this.dialog.open(template, {
      width: '100%'
    });
  }

  ifMatchPassword: boolean = false;

  matchPassword(): boolean {
    let password: string = this.registerForm.get('password')?.value;
    let passwordAgain: string = this.registerForm.get('rePassword')?.value;
    return (password == passwordAgain) ? this.ifMatchPassword = false : this.ifMatchPassword = true;
  }





}



