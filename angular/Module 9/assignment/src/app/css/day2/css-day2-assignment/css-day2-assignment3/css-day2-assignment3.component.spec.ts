import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDay2Assignment3Component } from './css-day2-assignment3.component';

describe('CssDay2Assignment3Component', () => {
  let component: CssDay2Assignment3Component;
  let fixture: ComponentFixture<CssDay2Assignment3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDay2Assignment3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssDay2Assignment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
