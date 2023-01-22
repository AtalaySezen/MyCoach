import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { CoachService } from 'src/app/services/coach.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coachs',
  templateUrl: './coachs.component.html',
  styleUrls: ['./coachs.component.scss']
})
export class CoachsComponent {
  coachArray:any;

  constructor(private apiService:CoachService,private router:Router){}

  ngOnInit(){
    this.getData();
  }

  getData(){
    this.apiService.GetCoaches().subscribe(data=>{
      console.log(data);
      this.coachArray = data;
    })
  }

  loadCoach(id:number){
    this.router.navigate(['coachs/'+id])
  }

  

}
