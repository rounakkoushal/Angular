import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDay2Assignment4Component } from './css-day2-assignment4.component';

describe('CssDay2Assignment4Component', () => {
  let component: CssDay2Assignment4Component;
  let fixture: ComponentFixture<CssDay2Assignment4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDay2Assignment4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssDay2Assignment4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
