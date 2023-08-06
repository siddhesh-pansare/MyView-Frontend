import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundDetailsComponent } from './round-details.component';

describe('RoundDetailsComponent', () => {
  let component: RoundDetailsComponent;
  let fixture: ComponentFixture<RoundDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoundDetailsComponent]
    });
    fixture = TestBed.createComponent(RoundDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
