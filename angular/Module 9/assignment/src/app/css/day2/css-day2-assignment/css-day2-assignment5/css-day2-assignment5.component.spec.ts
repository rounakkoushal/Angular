import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDay2Assignment5Component } from './css-day2-assignment5.component';

describe('CssDay2Assignment5Component', () => {
  let component: CssDay2Assignment5Component;
  let fixture: ComponentFixture<CssDay2Assignment5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDay2Assignment5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssDay2Assignment5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
