import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogGuestComponent } from './log-guest.component';

describe('LogGuestComponent', () => {
  let component: LogGuestComponent;
  let fixture: ComponentFixture<LogGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
