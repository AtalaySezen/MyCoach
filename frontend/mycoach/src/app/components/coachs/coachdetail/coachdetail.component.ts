import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coachdetail',
  templateUrl: './coachdetail.component.html',
  styleUrls: ['./coachdetail.component.scss']
})
export class CoachdetailComponent {

  coachData:any;

  constructor(private activateRoute:ActivatedRoute,private http:HttpClient){}

  ngOnInit(){
    this.getCoachById();
  }

  //Get Id Of Coach
  getCoachById(){
    const coachId = this.activateRoute.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:3000/coachs/${coachId}`).subscribe(data=>{
      this.coachData = data
    })
    

    console.log(coachId);
  }

  




}
