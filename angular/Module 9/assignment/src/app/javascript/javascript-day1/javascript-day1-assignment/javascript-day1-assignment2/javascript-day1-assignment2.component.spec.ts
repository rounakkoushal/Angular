import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay1Assignment2Component } from './javascript-day1-assignment2.component';

describe('JavascriptDay1Assignment2Component', () => {
  let component: JavascriptDay1Assignment2Component;
  let fixture: ComponentFixture<JavascriptDay1Assignment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay1Assignment2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay1Assignment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
