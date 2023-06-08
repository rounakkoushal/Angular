import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay5Practice1Component } from './javascript-day5-practice1.component';

describe('JavascriptDay5Practice1Component', () => {
  let component: JavascriptDay5Practice1Component;
  let fixture: ComponentFixture<JavascriptDay5Practice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay5Practice1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay5Practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
