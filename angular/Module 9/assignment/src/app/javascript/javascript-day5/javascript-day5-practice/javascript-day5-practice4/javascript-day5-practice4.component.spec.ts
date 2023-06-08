import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay5Practice4Component } from './javascript-day5-practice4.component';

describe('JavascriptDay5Practice4Component', () => {
  let component: JavascriptDay5Practice4Component;
  let fixture: ComponentFixture<JavascriptDay5Practice4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay5Practice4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay5Practice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
