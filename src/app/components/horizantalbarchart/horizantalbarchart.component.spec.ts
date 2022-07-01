import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizantalbarchartComponent } from './horizantalbarchart.component';

describe('HorizantalbarchartComponent', () => {
  let component: HorizantalbarchartComponent;
  let fixture: ComponentFixture<HorizantalbarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizantalbarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizantalbarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
