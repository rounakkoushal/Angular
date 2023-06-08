import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay1Practice3Component } from './javascript-day1-practice3.component';

describe('JavascriptDay1Practice3Component', () => {
  let component: JavascriptDay1Practice3Component;
  let fixture: ComponentFixture<JavascriptDay1Practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay1Practice3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay1Practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
