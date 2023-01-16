
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent {
  Form: FormGroup;

constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
    private http: HttpClient,
    private snackBar:SnackbarService,
    @Inject(MAT_DIALOG_DATA) public data: any){
      {
        this.Form = new FormGroup({
          id: new FormControl(this.data.id),
          username: new FormControl(this.data.username),
          surname: new FormControl(this.data.surname),
          password: new FormControl(this.data.password),
          email: new FormControl(this.data.email),
          profileImage : new FormControl(this.data.profileImage),
          age: new FormControl(this.data.age,Validators.required),
          city: new FormControl(this.data.city,Validators.required),
          textUser: new FormControl(this.data.textUser, Validators.required),
          statusUser: new FormControl(this.data.statusUser, Validators.required),
          userPhone : new FormControl(this.data.userPhone),
          userInterests: new FormControl(this.data.userInterests,Validators.required)
        });
      }
    }

    ngOnInit(): void {}

    saveDialog() {
      let id = this.Form.get('id')?.value;
      let username = this.Form.get('username')?.value;
      let surname = this.Form.get('surname')?.value;
      let password= this.Form.get('password')?.value;
      let email = this.Form.get('email')?.value;
      let statusUser = this.Form.get('statusUser')?.value;
      let profileImage = this.Form.get('profileImage')?.value;
      let age = this.Form.get('age')?.value;
      let city = this.Form.get('city')?.value;
      let textUser = this.Form.get('textUser')?.value;
      let userPhone = this.Form.get('userPhone')?.value;
      let userInterests = this.Form.get('userInterests')?.value;
      this.http.put<any>(`http://localhost:3000/users/${id}`, {
        id:id,
        username:username,
        surname:surname,
        password:password,
        email:email,
        statusUser:statusUser,
        profileImage:profileImage,
        age:age,
        city:city,
        textUser:textUser,
        userPhone:userPhone,
        userInterests:userInterests
   
      }).subscribe(data => {
        if (data) {
          console.log("kaydedildi")
          this.snackBar.showNotification('Başarıyla Güncellendi','Kapat');
          this.dialogRef.close({ event: 'success' });
        } else {
          console.log("hata")
          this.snackBar.showNotification('Bir Hata Oluştu','Kapat');
        }
      })
    }
  
  
    closeDialog() {
      this.dialogRef.close({ event: 'close' });
    }



    

}
