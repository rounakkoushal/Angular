import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptDay1PacticeComponent } from './javascript-day1-pactice.component';

describe('JavascriptDay1PacticeComponent', () => {
  let component: JavascriptDay1PacticeComponent;
  let fixture: ComponentFixture<JavascriptDay1PacticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptDay1PacticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavascriptDay1PacticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
