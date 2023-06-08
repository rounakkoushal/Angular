import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Htmlday1Component } from './htmlday1.component';

describe('Htmlday1Component', () => {
  let component: Htmlday1Component;
  let fixture: ComponentFixture<Htmlday1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Htmlday1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Htmlday1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
