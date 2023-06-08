import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDay2Practice3Component } from './css-day2-practice3.component';

describe('CssDay2Practice3Component', () => {
  let component: CssDay2Practice3Component;
  let fixture: ComponentFixture<CssDay2Practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDay2Practice3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssDay2Practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
