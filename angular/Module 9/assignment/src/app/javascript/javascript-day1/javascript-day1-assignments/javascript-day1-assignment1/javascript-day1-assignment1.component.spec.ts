import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay1Assignment1Component } from './javascript-day1-assignment1.component';

describe('JavascriptDay1Assignment1Component', () => {
  let component: JavascriptDay1Assignment1Component;
  let fixture: ComponentFixture<JavascriptDay1Assignment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay1Assignment1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay1Assignment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
