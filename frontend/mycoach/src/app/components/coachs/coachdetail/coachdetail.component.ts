import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { SubscribecoachComponent } from '../subscribecoach/subscribecoach.component';

@Component({
  selector: 'app-coachdetail',
  templateUrl: './coachdetail.component.html',
  styleUrls: ['./coachdetail.component.scss']
})
export class CoachdetailComponent {

  coachData: Array<any>;
  previewPhoto: any;

  constructor(private activateRoute: ActivatedRoute, private http: HttpClient, private dialog: MatDialog, private userService: AuthService) { }

  ngOnInit() {
    this.getCoachById();
  }

  //Get Id Of Coach
  getCoachById() {
    const coachId = this.activateRoute.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:3000/coachs/${coachId}`).subscribe(data => {
      let Array = [];
      Array.push(data);
      this.coachData = Array;
    })
    console.log(coachId);
  }



  showPhoto(templateRef: any, image: any) {
    console.log(image.src)
    this.previewPhoto = image.src;
    console.log(this.previewPhoto);
    const dialogRef = this.dialog.open(templateRef, {
      width: '100%',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }


  subscribeCoach() {
    this.dialog.open(SubscribecoachComponent, {
      width: '100%',
      height: '400px'
    });
  }





}



