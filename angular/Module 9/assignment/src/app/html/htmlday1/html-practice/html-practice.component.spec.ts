import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlPracticeComponent } from './html-practice.component';

describe('HtmlPracticeComponent', () => {
  let component: HtmlPracticeComponent;
  let fixture: ComponentFixture<HtmlPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlPracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
