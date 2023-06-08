import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlPractice1Component } from './html-practice1.component';

describe('HtmlPractice1Component', () => {
  let component: HtmlPractice1Component;
  let fixture: ComponentFixture<HtmlPractice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlPractice1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlPractice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
