import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay3Practice8Component } from './javascript-day3-practice8.component';

describe('JavascriptDay3Practice8Component', () => {
  let component: JavascriptDay3Practice8Component;
  let fixture: ComponentFixture<JavascriptDay3Practice8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay3Practice8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay3Practice8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
