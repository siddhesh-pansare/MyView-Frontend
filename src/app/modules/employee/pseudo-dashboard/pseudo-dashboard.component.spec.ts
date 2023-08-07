import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudoDashboardComponent } from './pseudo-dashboard.component';

describe('PseudoDashboardComponent', () => {
  let component: PseudoDashboardComponent;
  let fixture: ComponentFixture<PseudoDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PseudoDashboardComponent]
    });
    fixture = TestBed.createComponent(PseudoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
