import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDay2Practice6Component } from './css-day2-practice6.component';

describe('CssDay2Practice6Component', () => {
  let component: CssDay2Practice6Component;
  let fixture: ComponentFixture<CssDay2Practice6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDay2Practice6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssDay2Practice6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
