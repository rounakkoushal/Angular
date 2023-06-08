import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlAssignmentComponent } from './html-assignment.component';

describe('HtmlAssignmentComponent', () => {
  let component: HtmlAssignmentComponent;
  let fixture: ComponentFixture<HtmlAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
