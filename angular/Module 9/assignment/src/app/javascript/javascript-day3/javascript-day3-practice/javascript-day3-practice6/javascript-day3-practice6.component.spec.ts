import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay3Practice6Component } from './javascript-day3-practice6.component';

describe('JavascriptDay3Practice6Component', () => {
  let component: JavascriptDay3Practice6Component;
  let fixture: ComponentFixture<JavascriptDay3Practice6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay3Practice6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay3Practice6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
