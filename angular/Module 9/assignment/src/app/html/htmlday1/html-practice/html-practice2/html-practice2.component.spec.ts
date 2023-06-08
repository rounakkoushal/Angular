import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlPractice2Component } from './html-practice2.component';

describe('HtmlPractice2Component', () => {
  let component: HtmlPractice2Component;
  let fixture: ComponentFixture<HtmlPractice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlPractice2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlPractice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
