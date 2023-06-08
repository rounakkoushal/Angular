import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay5Component } from './javascript-day5.component';

describe('JavascriptDay5Component', () => {
  let component: JavascriptDay5Component;
  let fixture: ComponentFixture<JavascriptDay5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
