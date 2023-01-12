import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

export class AuthService{

constructor(public Router:Router,public http:HttpClient){}
    

get UserInfo() {
    const username = JSON.parse(localStorage.getItem('user'));
    return username;
}

Logout(){
    localStorage.removeItem('userLogged');
    this.Router.navigate(['login']);
}

LoginUser(){
    return this.http.get<any>("http://localhost:3000/users")
}

RegisterUser(data:any){
    return this.http.post<any>("http://localhost:3000/users",data)
}


RegisterCoach(data:any){
    return this.http.post<any>("http://localhost:3000/coachs",data)
}
    
    





}