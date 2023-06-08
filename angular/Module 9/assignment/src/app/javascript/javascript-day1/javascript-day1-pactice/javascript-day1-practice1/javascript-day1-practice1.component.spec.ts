import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay1Practice1Component } from './javascript-day1-practice1.component';

describe('JavascriptDay1Practice1Component', () => {
  let component: JavascriptDay1Practice1Component;
  let fixture: ComponentFixture<JavascriptDay1Practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay1Practice1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay1Practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
