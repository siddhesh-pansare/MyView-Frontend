import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECInformationComponent } from './ec-information.component';

describe('ECInformationComponent', () => {
  let component: ECInformationComponent;
  let fixture: ComponentFixture<ECInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ECInformationComponent]
    });
    fixture = TestBed.createComponent(ECInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
