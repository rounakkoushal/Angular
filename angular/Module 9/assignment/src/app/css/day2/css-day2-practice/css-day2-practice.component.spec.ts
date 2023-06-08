import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDay2PracticeComponent } from './css-day2-practice.component';

describe('CssDay2PracticeComponent', () => {
  let component: CssDay2PracticeComponent;
  let fixture: ComponentFixture<CssDay2PracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssDay2PracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssDay2PracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
