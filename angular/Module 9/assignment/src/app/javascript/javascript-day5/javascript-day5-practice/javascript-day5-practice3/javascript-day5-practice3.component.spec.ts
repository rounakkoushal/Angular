import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay5Practice3Component } from './javascript-day5-practice3.component';

describe('JavascriptDay5Practice3Component', () => {
  let component: JavascriptDay5Practice3Component;
  let fixture: ComponentFixture<JavascriptDay5Practice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay5Practice3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay5Practice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
