import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay1AssignmentComponent } from './javascript-day1-assignment.component';

describe('JavascriptDay1AssignmentComponent', () => {
  let component: JavascriptDay1AssignmentComponent;
  let fixture: ComponentFixture<JavascriptDay1AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay1AssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay1AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
