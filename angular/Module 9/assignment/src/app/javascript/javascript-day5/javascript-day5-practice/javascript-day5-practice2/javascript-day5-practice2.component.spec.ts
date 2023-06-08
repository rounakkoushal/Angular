import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay5Practice2Component } from './javascript-day5-practice2.component';

describe('JavascriptDay5Practice2Component', () => {
  let component: JavascriptDay5Practice2Component;
  let fixture: ComponentFixture<JavascriptDay5Practice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay5Practice2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay5Practice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
