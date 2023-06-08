import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay3AssignmentComponent } from './javascript-day3-assignment.component';

describe('JavascriptDay3AssignmentComponent', () => {
  let component: JavascriptDay3AssignmentComponent;
  let fixture: ComponentFixture<JavascriptDay3AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay3AssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay3AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
