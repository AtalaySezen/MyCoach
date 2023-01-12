import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;
  loading: boolean = false
  loginForm: FormGroup
  idCount: Array<any>;
  id: number;

  constructor(private http: HttpClient, private route: Router, private loginApi:AuthService) {
    {
      this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
      })
    }
  }

  ngOnInit() {

  }

  //Service'den alınacak.
  loginUser() {
    this.http.get<any>("http://localhost:3000/users")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password == this.loginForm.value.password
        });

        if (user) {
          console.log(user);
          let userInfos = user.id + user.username + user.surname + user.email;
          localStorage.setItem("user", JSON.stringify(user));
          alert("hoşgeldin");
          localStorage.setItem('userLogged', "true");
          this.loginForm.reset();
          this.route.navigate(['profile'])

        } else {
          alert("user not found");
        }
      }, err => {
        console.log("hata var");
      })

  }


}
