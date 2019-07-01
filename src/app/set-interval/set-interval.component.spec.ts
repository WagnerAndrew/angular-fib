import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetIntervalComponent } from './set-interval.component';

describe('SetIntervalComponent', () => {
  let component: SetIntervalComponent;
  let fixture: ComponentFixture<SetIntervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetIntervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
