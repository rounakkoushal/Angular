import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlAssignment2Component } from './html-assignment2.component';

describe('HtmlAssignment2Component', () => {
  let component: HtmlAssignment2Component;
  let fixture: ComponentFixture<HtmlAssignment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlAssignment2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlAssignment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
