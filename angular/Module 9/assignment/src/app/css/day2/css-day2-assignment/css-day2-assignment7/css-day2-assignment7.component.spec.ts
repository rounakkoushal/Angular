import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDay2Assignment7Component } from './css-day2-assignment7.component';

describe('CssDay2Assignment7Component', () => {
  let component: CssDay2Assignment7Component;
  let fixture: ComponentFixture<CssDay2Assignment7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDay2Assignment7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssDay2Assignment7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
