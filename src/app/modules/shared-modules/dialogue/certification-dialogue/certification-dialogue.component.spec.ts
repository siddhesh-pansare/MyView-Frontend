import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationDialogueComponent } from './certification-dialogue.component';

describe('CertificationDialogueComponent', () => {
  let component: CertificationDialogueComponent;
  let fixture: ComponentFixture<CertificationDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificationDialogueComponent]
    });
    fixture = TestBed.createComponent(CertificationDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
