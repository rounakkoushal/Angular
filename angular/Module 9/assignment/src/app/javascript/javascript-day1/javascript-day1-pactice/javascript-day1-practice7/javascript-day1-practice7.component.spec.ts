import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay1Practice7Component } from './javascript-day1-practice7.component';

describe('JavascriptDay1Practice7Component', () => {
  let component: JavascriptDay1Practice7Component;
  let fixture: ComponentFixture<JavascriptDay1Practice7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay1Practice7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay1Practice7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
