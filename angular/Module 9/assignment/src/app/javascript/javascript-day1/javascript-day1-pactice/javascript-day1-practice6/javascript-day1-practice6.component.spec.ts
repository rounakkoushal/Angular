import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay1Practice6Component } from './javascript-day1-practice6.component';

describe('JavascriptDay1Practice6Component', () => {
  let component: JavascriptDay1Practice6Component;
  let fixture: ComponentFixture<JavascriptDay1Practice6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay1Practice6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay1Practice6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
