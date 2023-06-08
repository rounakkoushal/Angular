import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlAssignment1Component } from './html-assignment1.component';

describe('HtmlAssignment1Component', () => {
  let component: HtmlAssignment1Component;
  let fixture: ComponentFixture<HtmlAssignment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlAssignment1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlAssignment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
