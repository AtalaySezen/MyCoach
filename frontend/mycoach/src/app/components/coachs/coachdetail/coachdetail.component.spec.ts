import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachdetailComponent } from './coachdetail.component';

describe('CoachdetailComponent', () => {
  let component: CoachdetailComponent;
  let fixture: ComponentFixture<CoachdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
