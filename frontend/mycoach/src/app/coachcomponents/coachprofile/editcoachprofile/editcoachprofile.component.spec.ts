import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcoachprofileComponent } from './editcoachprofile.component';

describe('EditcoachprofileComponent', () => {
  let component: EditcoachprofileComponent;
  let fixture: ComponentFixture<EditcoachprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcoachprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcoachprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
