import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay3Practice5Component } from './javascript-day3-practice5.component';

describe('JavascriptDay3Practice5Component', () => {
  let component: JavascriptDay3Practice5Component;
  let fixture: ComponentFixture<JavascriptDay3Practice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay3Practice5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay3Practice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
