import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay1Practice5Component } from './javascript-day1-practice5.component';

describe('JavascriptDay1Practice5Component', () => {
  let component: JavascriptDay1Practice5Component;
  let fixture: ComponentFixture<JavascriptDay1Practice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay1Practice5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay1Practice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
