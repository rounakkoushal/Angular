import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay3Practice1Component } from './javascript-day3-practice1.component';

describe('JavascriptDay3Practice1Component', () => {
  let component: JavascriptDay3Practice1Component;
  let fixture: ComponentFixture<JavascriptDay3Practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay3Practice1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay3Practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
