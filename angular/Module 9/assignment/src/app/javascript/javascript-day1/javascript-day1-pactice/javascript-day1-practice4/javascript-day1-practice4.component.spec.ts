import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay1Practice4Component } from './javascript-day1-practice4.component';

describe('JavascriptDay1Practice4Component', () => {
  let component: JavascriptDay1Practice4Component;
  let fixture: ComponentFixture<JavascriptDay1Practice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay1Practice4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay1Practice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
