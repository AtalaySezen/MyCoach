import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  hide = true;
  loading: boolean = false
  registerForm: FormGroup
  idCount: Array<any>;
  id: number;

  constructor(private http: HttpClient) {
    {
      this.registerForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        surname: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        email: new FormControl('', [Validators.required, Validators.email])

      })
    }
  }

  ngOnInit() { }


  saveUser() {
    this.http.get('http://localhost:3000/users').subscribe(data => {
      this.id = Object.keys(data).length
      let username = this.registerForm.get('username')?.value;
      let surname = this.registerForm.get('surname')?.value;
      let password = this.registerForm.get('password')?.value;
      let email = this.registerForm.get('email')?.value;
      console.log(this.id);
      this.http.post<any>(`http://localhost:3000/users`, {
        id: this.id + 1,
        username: username,
        surname: surname,
        password: password,
        email: email
      }).subscribe(data => {
        if (data) {
          console.log("ok")

        } else {
          console.log("hata")
        }
      })

    })
  }



}



