import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay5AssignmentComponent } from './javascript-day5-assignment.component';

describe('JavascriptDay5AssignmentComponent', () => {
  let component: JavascriptDay5AssignmentComponent;
  let fixture: ComponentFixture<JavascriptDay5AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay5AssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay5AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
