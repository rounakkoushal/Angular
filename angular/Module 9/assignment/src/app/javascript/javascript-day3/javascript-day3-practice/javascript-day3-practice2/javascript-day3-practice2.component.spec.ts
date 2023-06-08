import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay3Practice2Component } from './javascript-day3-practice2.component';

describe('JavascriptDay3Practice2Component', () => {
  let component: JavascriptDay3Practice2Component;
  let fixture: ComponentFixture<JavascriptDay3Practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay3Practice2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay3Practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
