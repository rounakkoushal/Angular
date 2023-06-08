import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDay2Practice7Component } from './css-day2-practice7.component';

describe('CssDay2Practice7Component', () => {
  let component: CssDay2Practice7Component;
  let fixture: ComponentFixture<CssDay2Practice7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDay2Practice7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssDay2Practice7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
