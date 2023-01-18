import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqcenterComponent } from './faqcenter.component';

describe('FaqcenterComponent', () => {
  let component: FaqcenterComponent;
  let fixture: ComponentFixture<FaqcenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqcenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
