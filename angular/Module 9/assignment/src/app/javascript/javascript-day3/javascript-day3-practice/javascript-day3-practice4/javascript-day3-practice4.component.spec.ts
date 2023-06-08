import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay3Practice4Component } from './javascript-day3-practice4.component';

describe('JavascriptDay3Practice4Component', () => {
  let component: JavascriptDay3Practice4Component;
  let fixture: ComponentFixture<JavascriptDay3Practice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay3Practice4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay3Practice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
