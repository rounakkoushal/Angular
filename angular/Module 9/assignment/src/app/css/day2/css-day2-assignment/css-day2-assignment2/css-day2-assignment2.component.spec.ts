import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDay2Assignment2Component } from './css-day2-assignment2.component';

describe('CssDay2Assignment2Component', () => {
  let component: CssDay2Assignment2Component;
  let fixture: ComponentFixture<CssDay2Assignment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDay2Assignment2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssDay2Assignment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
