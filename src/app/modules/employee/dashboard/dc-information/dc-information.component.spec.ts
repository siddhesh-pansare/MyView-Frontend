import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcInformationComponent } from './dc-information.component';

describe('DcInformationComponent', () => {
  let component: DcInformationComponent;
  let fixture: ComponentFixture<DcInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcInformationComponent]
    });
    fixture = TestBed.createComponent(DcInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
