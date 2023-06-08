import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDay2Practice1Component } from './css-day2-practice1.component';

describe('CssDay2Practice1Component', () => {
  let component: CssDay2Practice1Component;
  let fixture: ComponentFixture<CssDay2Practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDay2Practice1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssDay2Practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
