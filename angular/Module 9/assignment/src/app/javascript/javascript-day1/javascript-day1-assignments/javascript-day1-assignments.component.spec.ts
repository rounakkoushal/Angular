import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay1AssignmentsComponent } from './javascript-day1-assignments.component';

describe('JavascriptDay1AssignmentsComponent', () => {
  let component: JavascriptDay1AssignmentsComponent;
  let fixture: ComponentFixture<JavascriptDay1AssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay1AssignmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay1AssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
