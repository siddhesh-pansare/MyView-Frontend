import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenposdialogComponent } from './openposdialog.component';

describe('OpenposdialogComponent', () => {
  let component: OpenposdialogComponent;
  let fixture: ComponentFixture<OpenposdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenposdialogComponent]
    });
    fixture = TestBed.createComponent(OpenposdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
