import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachearningsComponent } from './coachearnings.component';

describe('CoachearningsComponent', () => {
  let component: CoachearningsComponent;
  let fixture: ComponentFixture<CoachearningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachearningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachearningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
