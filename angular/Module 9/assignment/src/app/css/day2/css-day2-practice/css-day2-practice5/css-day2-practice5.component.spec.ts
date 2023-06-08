import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDay2Practice5Component } from './css-day2-practice5.component';

describe('CssDay2Practice5Component', () => {
  let component: CssDay2Practice5Component;
  let fixture: ComponentFixture<CssDay2Practice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDay2Practice5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssDay2Practice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
