import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDay2Assignment6Component } from './css-day2-assignment6.component';

describe('CssDay2Assignment6Component', () => {
  let component: CssDay2Assignment6Component;
  let fixture: ComponentFixture<CssDay2Assignment6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDay2Assignment6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssDay2Assignment6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
