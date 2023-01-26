import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribecoachComponent } from './subscribecoach.component';

describe('SubscribecoachComponent', () => {
  let component: SubscribecoachComponent;
  let fixture: ComponentFixture<SubscribecoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribecoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribecoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
