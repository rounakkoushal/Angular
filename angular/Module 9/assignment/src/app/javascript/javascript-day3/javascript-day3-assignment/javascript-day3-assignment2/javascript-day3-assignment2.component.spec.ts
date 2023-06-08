import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay3Assignment2Component } from './javascript-day3-assignment2.component';

describe('JavascriptDay3Assignment2Component', () => {
  let component: JavascriptDay3Assignment2Component;
  let fixture: ComponentFixture<JavascriptDay3Assignment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay3Assignment2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay3Assignment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
