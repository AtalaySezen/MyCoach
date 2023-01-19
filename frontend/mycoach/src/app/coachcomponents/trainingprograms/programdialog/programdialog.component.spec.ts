import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramdialogComponent } from './programdialog.component';

describe('ProgramdialogComponent', () => {
  let component: ProgramdialogComponent;
  let fixture: ComponentFixture<ProgramdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
