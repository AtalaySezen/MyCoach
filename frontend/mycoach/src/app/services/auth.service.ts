import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

export class AuthService{

constructor(public Router:Router){}
    

get UserInfo() {
    const username = JSON.parse(localStorage.getItem('user'));
    return username;
}

Logout(){
    localStorage.removeItem('userLogged');
    this.Router.navigate(['login']);
}

    
    
    





}