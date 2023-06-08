import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay3Practice9Component } from './javascript-day3-practice9.component';

describe('JavascriptDay3Practice9Component', () => {
  let component: JavascriptDay3Practice9Component;
  let fixture: ComponentFixture<JavascriptDay3Practice9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay3Practice9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay3Practice9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
