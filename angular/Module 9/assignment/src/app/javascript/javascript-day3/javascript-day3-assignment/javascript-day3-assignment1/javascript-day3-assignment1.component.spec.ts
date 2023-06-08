import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay3Assignment1Component } from './javascript-day3-assignment1.component';

describe('JavascriptDay3Assignment1Component', () => {
  let component: JavascriptDay3Assignment1Component;
  let fixture: ComponentFixture<JavascriptDay3Assignment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay3Assignment1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay3Assignment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
