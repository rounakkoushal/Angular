import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay3Practice3Component } from './javascript-day3-practice3.component';

describe('JavascriptDay3Practice3Component', () => {
  let component: JavascriptDay3Practice3Component;
  let fixture: ComponentFixture<JavascriptDay3Practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay3Practice3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay3Practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
