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

  experience : Experience[] = [
    { value: '1-3', viewValue: '1-3' },
    { value: '3-6', viewValue: '3-6' },
    { value: '6+', viewValue: '6+' },
  ];

  speciality  : Speciality [] = [
    { value: 'Basketbol', viewValue: 'Basketbol' },
    { value: 'Futbol', viewValue: 'Futbol' },
    { value: 'Fitness', viewValue: 'Fitness' },
  ];


  selectedExperience = this.experience[0].value;
  selectedSpeciality = this.speciality[0].value;

  constructor(private http: HttpClient,private snackBar:SnackbarService,private router:Router) {
    {
      this.registerForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        surname: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        rePassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
        licenses:new FormControl('',[]),
        profiency:new FormControl('',[]),
        email: new FormControl('', [Validators.required, Validators.email]),
        selectedSpeciality: new FormControl('', [Validators.required]),
        selectedExperience: new FormControl('', [Validators.required])

      })
    }
  }

  selectExperience(event: Event) {
    this.selectedExperience = (event.target as HTMLSelectElement).value;
  }

  selectSpeciality(event: Event) {
    this.selectedSpeciality = (event.target as HTMLSelectElement).value;
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
      let speciality = this.registerForm.get('selectedSpeciality')?.value;
      let statusUser = 2
      let profileImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
      let age = 0;
      let city = "Hangi Şehirde Yaşıyorsun?";
      let textUser = "Kendini Tanıtman için bir alan.";
      let mobil = "05555555555";
      let userInterests = "myCoach";
      console.log(this.id);
      this.http.post<any>(`http://localhost:3000/coachs`, {
        id: this.id + 1,
        username: username,
        surname: surname,
        password: password,
        email: email,
        selectedExperience:selectedExperience,
        statusUser: statusUser,
        profileImage: profileImage,
        age: age,
        licenses:licenses,
        city: city,
        textUser: textUser,
        mobil: mobil,
        speciality:speciality,
        userInterests: userInterests
      }).subscribe(data => {
        if (data) {
          this.snackBar.showNotification('Hesabınız Başarıyla Oluşturuldu','Kapat');
          this.router.navigate(['/verify']);
          console.log("ok")
        } else {
          this.snackBar.showNotification('Bir Hata Var','Kapat');
          console.log("hata")        }
      },
      err=>console.log(err)
      )

    })
  }

 




}
