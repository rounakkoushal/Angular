import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay3Practice7Component } from './javascript-day3-practice7.component';

describe('JavascriptDay3Practice7Component', () => {
  let component: JavascriptDay3Practice7Component;
  let fixture: ComponentFixture<JavascriptDay3Practice7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay3Practice7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay3Practice7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
