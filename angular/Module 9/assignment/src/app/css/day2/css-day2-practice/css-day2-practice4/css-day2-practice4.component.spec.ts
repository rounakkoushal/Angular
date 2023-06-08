import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDay2Practice4Component } from './css-day2-practice4.component';

describe('CssDay2Practice4Component', () => {
  let component: CssDay2Practice4Component;
  let fixture: ComponentFixture<CssDay2Practice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDay2Practice4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssDay2Practice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
