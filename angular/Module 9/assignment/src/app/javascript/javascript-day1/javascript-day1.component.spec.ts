import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay1Component } from './javascript-day1.component';

describe('JavascriptDay1Component', () => {
  let component: JavascriptDay1Component;
  let fixture: ComponentFixture<JavascriptDay1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
