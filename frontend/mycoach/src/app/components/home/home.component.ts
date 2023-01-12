import { Component, ViewEncapsulation, ViewChild, ElementRef } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackbarComponent } from "src/app/shared/snackbar/snackbar.component";
import { SnackbarService } from "src/app/services/snackbar.service";
SwiperCore.use([Navigation, Scrollbar, A11y]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

  userLogged: boolean = false;
  changeImage:string = 'https://images.pexels.com/photos/4348638/pexels-photo-4348638.jpeg?auto=compress&cs=tinysrgb&w=1600';
  durationInSeconds = 5;
  constructor(private elementRef: ElementRef,private notifyService:SnackbarService) {}



  ngOnInit() {
    this.checkUserLogged();
  }

  checkUserLogged() {
    if (localStorage.getItem('userLogged') == "true") {
      this.userLogged = true;
    }
  }

  test(){
    this.notifyService.showNotification('Çok Yakında!','Kapat');
  }


  



}
