import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay5PracticeComponent } from './javascript-day5-practice.component';

describe('JavascriptDay5PracticeComponent', () => {
  let component: JavascriptDay5PracticeComponent;
  let fixture: ComponentFixture<JavascriptDay5PracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay5PracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay5PracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
