import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribecoach',
  templateUrl: './subscribecoach.component.html',
  styleUrls: ['./subscribecoach.component.scss']
})
export class SubscribecoachComponent {
  constructor(private _formBuilder: FormBuilder) { }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isEditable = false;


}
