import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments.prod';


@Injectable({
    providedIn: 'root'
  })

  export class profileService{
    constructor(public Router:Router,public http:HttpClient){}


    updateUserText(id:number,text:any): Observable<any> {
        return this.http.put<any>(environment.usersApi + id, {
            id:id,
            text:text
        });
      }





  }