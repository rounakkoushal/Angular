import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay5Practice5Component } from './javascript-day5-practice5.component';

describe('JavascriptDay5Practice5Component', () => {
  let component: JavascriptDay5Practice5Component;
  let fixture: ComponentFixture<JavascriptDay5Practice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay5Practice5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay5Practice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
