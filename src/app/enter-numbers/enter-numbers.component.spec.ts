import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterNumbersComponent } from './enter-numbers.component';

describe('EnterNumbersComponent', () => {
  let component: EnterNumbersComponent;
  let fixture: ComponentFixture<EnterNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
