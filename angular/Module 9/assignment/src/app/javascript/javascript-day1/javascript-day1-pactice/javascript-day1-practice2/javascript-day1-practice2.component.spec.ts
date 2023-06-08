import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay1Practice2Component } from './javascript-day1-practice2.component';

describe('JavascriptDay1Practice2Component', () => {
  let component: JavascriptDay1Practice2Component;
  let fixture: ComponentFixture<JavascriptDay1Practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay1Practice2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay1Practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
