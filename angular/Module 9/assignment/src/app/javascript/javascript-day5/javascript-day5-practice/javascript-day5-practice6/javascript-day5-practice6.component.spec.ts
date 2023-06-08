import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay5Practice6Component } from './javascript-day5-practice6.component';

describe('JavascriptDay5Practice6Component', () => {
  let component: JavascriptDay5Practice6Component;
  let fixture: ComponentFixture<JavascriptDay5Practice6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay5Practice6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay5Practice6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
