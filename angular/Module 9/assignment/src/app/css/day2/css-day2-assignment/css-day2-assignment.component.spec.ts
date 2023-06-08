import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDay2AssignmentComponent } from './css-day2-assignment.component';

describe('CssDay2AssignmentComponent', () => {
  let component: CssDay2AssignmentComponent;
  let fixture: ComponentFixture<CssDay2AssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDay2AssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssDay2AssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
