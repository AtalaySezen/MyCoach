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
  searchValue: any;
  loadingTable: boolean = false;
  filterMessage: boolean = false;
  constructor(private apiService: CoachService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }


  getData() {
    this.loadingTable = true;
    this.apiService.GetCoaches().subscribe(data => {
      this.coachArray = data;
      this.loadingTable = false;
    })
  }

  loadCoach(id: number) {
    this.router.navigate(['coachs/' + id])
  }


  filterCategories() {
    this.apiService.GetCoaches().subscribe(data => {
      this.coachArray = [];
      this.loadingTable = true;
      data.map((element: any) => {
        if (element.userInterests.includes(this.selectedCategory)) {
          this.coachArray.push(element);
          this.filterMessage = false;
          this.loadingTable = false;
        } else if (this.selectedCategory == 0) {
          this.coachArray = data;
          this.filterMessage = false;
          this.loadingTable = false;
        } else if (this.coachArray.length < 1) {
          this.filterMessage = true;
          this.loadingTable = false;
        }
      })
    })
  }

  searchFilter() {
    console.log(this.searchValue);

  }

  sortCoachs() {
    if (this.sortValue == 2) {
      this.coachArray.reverse();
    } else {
      console.log("puana göre")
    }

  }









}
