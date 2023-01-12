import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thankyou1Component } from './thankyou1.component';

describe('Thankyou1Component', () => {
  let component: Thankyou1Component;
  let fixture: ComponentFixture<Thankyou1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Thankyou1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Thankyou1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
