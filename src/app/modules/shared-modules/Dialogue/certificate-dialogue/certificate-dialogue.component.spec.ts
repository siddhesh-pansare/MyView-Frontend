import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateDialogueComponent } from './certificate-dialogue.component';

describe('CertificateDialogueComponent', () => {
  let component: CertificateDialogueComponent;
  let fixture: ComponentFixture<CertificateDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificateDialogueComponent]
    });
    fixture = TestBed.createComponent(CertificateDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
