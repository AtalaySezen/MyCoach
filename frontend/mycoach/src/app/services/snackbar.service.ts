import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../shared/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar:MatSnackBar) { }


  showNotification(displayMessage:string, buttonText:string){
    this.snackbar.openFromComponent(SnackbarComponent, {
      data:{
        message:displayMessage,
        buttonText:buttonText
      },
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    });
  }


}
