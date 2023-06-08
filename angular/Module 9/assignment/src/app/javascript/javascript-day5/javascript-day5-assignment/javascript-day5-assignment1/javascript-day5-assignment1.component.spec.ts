import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay5Assignment1Component } from './javascript-day5-assignment1.component';

describe('JavascriptDay5Assignment1Component', () => {
  let component: JavascriptDay5Assignment1Component;
  let fixture: ComponentFixture<JavascriptDay5Assignment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay5Assignment1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay5Assignment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
