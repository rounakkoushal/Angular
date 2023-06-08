import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay5Practice7Component } from './javascript-day5-practice7.component';

describe('JavascriptDay5Practice7Component', () => {
  let component: JavascriptDay5Practice7Component;
  let fixture: ComponentFixture<JavascriptDay5Practice7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay5Practice7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay5Practice7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
