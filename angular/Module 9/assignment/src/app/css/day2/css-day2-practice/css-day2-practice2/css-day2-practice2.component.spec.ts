import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDay2Practice2Component } from './css-day2-practice2.component';

describe('CssDay2Practice2Component', () => {
  let component: CssDay2Practice2Component;
  let fixture: ComponentFixture<CssDay2Practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDay2Practice2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssDay2Practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
