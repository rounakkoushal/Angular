import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay3Practice10Component } from './javascript-day3-practice10.component';

describe('JavascriptDay3Practice10Component', () => {
  let component: JavascriptDay3Practice10Component;
  let fixture: ComponentFixture<JavascriptDay3Practice10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay3Practice10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay3Practice10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
