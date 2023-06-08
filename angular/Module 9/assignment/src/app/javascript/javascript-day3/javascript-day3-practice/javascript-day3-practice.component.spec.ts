import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay3PracticeComponent } from './javascript-day3-practice.component';

describe('JavascriptDay3PracticeComponent', () => {
  let component: JavascriptDay3PracticeComponent;
  let fixture: ComponentFixture<JavascriptDay3PracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay3PracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay3PracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
