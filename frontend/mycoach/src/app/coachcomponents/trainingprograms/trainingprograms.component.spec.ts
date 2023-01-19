import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingprogramsComponent } from './trainingprograms.component';

describe('TrainingprogramsComponent', () => {
  let component: TrainingprogramsComponent;
  let fixture: ComponentFixture<TrainingprogramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingprogramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingprogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
