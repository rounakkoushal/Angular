import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay3Component } from './javascript-day3.component';

describe('JavascriptDay3Component', () => {
  let component: JavascriptDay3Component;
  let fixture: ComponentFixture<JavascriptDay3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
