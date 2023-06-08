import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDay2Practice8Component } from './css-day2-practice8.component';

describe('CssDay2Practice8Component', () => {
  let component: CssDay2Practice8Component;
  let fixture: ComponentFixture<CssDay2Practice8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDay2Practice8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssDay2Practice8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
