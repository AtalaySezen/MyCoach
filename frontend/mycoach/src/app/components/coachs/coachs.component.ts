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
  coachArray: any;
  categoriesArray: any = ['CrossFit', 'Fitness', 'Boks', 'Kick Boks', 'MMA', 'Yoga', 'Pilates', 'Yaşam Koçu', 'Tenis', 'Basketbol', 'Futbol'].sort();
  selectedCategory: any;
  sortValue: number;
  constructor(private apiService: CoachService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }


  getData() {
    this.apiService.GetCoaches().subscribe(data => {
      this.coachArray = data;
      data.map((element: any) => {
        console.log(element.userInterests)
      })
    })
  }

  loadCoach(id: number) {
    this.router.navigate(['coachs/' + id])
  }


  filterCategories() {
    this.apiService.GetCoaches().subscribe(data => {
      this.coachArray = [];
      data.map((element: any) => {
        if (element.userInterests.includes(this.selectedCategory)) {
          this.coachArray.push(element);
        } else if (this.selectedCategory == 0) {
          this.coachArray = data;
        }
      })
    })
  }

  sortCoachs() {
    console.log(this.sortValue);
    if (this.sortValue = 1) {
      this.coachArray.sort();
    } else {
      console.log("puana göre sırala")
    }

  }








}
