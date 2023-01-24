import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Router } from '@angular/router';

interface Experience {
  value: string;
  viewValue: string;
}

interface Speciality {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registercoach',
  templateUrl: './registercoach.component.html',
  styleUrls: ['./registercoach.component.scss']
})

export class RegistercoachComponent {
  hide = true;
  hide2 = true;
  loading: boolean = false
  registerForm: FormGroup
  idCount: Array<any>;
  id: number;

  experience: Experience[] = [
    { value: '1-3', viewValue: '1-3' },
    { value: '3-6', viewValue: '3-6' },
    { value: '6+', viewValue: '6+' },
  ];


  categoriesArray: any = ['CrossFit', 'Fitness', 'Boks', 'Kick Boks', 'MMA', 'Yoga', 'Pilates', 'Yaşam Koçu', 'Tenis', 'Basketbol', 'Futbol'].sort();

  selectedExperience = this.experience[0].value;

  constructor(private http: HttpClient, private snackBar: SnackbarService, private router: Router) {
    {
      this.registerForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        surname: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        rePassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
        licenses: new FormControl('', []),
        profiency: new FormControl('', []),
        email: new FormControl('', [Validators.required, Validators.email]),
        selectedExperience: new FormControl('', [Validators.required]),
        categories: new FormControl('', [Validators.maxLength(3)])

      })
    }
  }

  selectExperience(event: Event) {
    this.selectedExperience = (event.target as HTMLSelectElement).value;
  }

  selectSpeciality() {
    let username = this.registerForm.get('categories')?.value;
    console.log(username);

  }

  ngOnInit() { }


  //Check Match Password
  ifMatchPassword: boolean = false;
  matchPassword(): boolean {
    let password: string = this.registerForm.get('password')?.value;
    let passwordAgain: string = this.registerForm.get('rePassword')?.value;
    return (password == passwordAgain) ? this.ifMatchPassword = false : this.ifMatchPassword = true;
  }


  saveUser() {
    this.http.get('http://localhost:3000/coachs').subscribe(data => {
      this.id = Object.keys(data).length
      let username = this.registerForm.get('username')?.value;
      let surname = this.registerForm.get('surname')?.value;
      let password = this.registerForm.get('password')?.value;
      let email = this.registerForm.get('email')?.value;
      let selectedExperience = this.registerForm.get('selectedExperience')?.value;
      let licenses = this.registerForm.get('licenses')?.value;
      let statusUser = 2
      let profileImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
      let age = 0;
      let city = "Hangi Şehirde Yaşıyorsun?";
      let textUser = "Kendini Tanıtman için bir alan.";
      let mobil = "05555555555";
      let userInterests = this.registerForm.get('categories')?.value;
      console.log(this.id);
      this.http.post<any>(`http://localhost:3000/coachs`, {
        id: this.id + 1,
        username: username,
        surname: surname,
        password: password,
        email: email,
        selectedExperience: selectedExperience,
        statusUser: statusUser,
        profileImage: profileImage,
        age: age,
        licenses: licenses,
        city: city,
        userInterests: userInterests,
        textUser: textUser,
        mobil: mobil,
      }).subscribe(data => {
        if (data) {
          this.snackBar.showNotification('Hesabınız Başarıyla Oluşturuldu', 'Kapat');
          this.router.navigate(['/verify']);
          console.log("ok")
        } else {
          this.snackBar.showNotification('Bir Hata Var', 'Kapat');
          console.log("hata")
        }
      },
        err => console.log(err)
      )

    })
  }






}
