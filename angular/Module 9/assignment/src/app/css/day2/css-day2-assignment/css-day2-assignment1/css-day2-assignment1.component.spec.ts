import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDay2Assignment1Component } from './css-day2-assignment1.component';

describe('CssDay2Assignment1Component', () => {
  let component: CssDay2Assignment1Component;
  let fixture: ComponentFixture<CssDay2Assignment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDay2Assignment1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssDay2Assignment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
