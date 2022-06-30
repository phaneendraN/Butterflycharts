import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButterflychartComponent } from './butterflychart.component';

describe('ButterflychartComponent', () => {
  let component: ButterflychartComponent;
  let fixture: ComponentFixture<ButterflychartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButterflychartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButterflychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
