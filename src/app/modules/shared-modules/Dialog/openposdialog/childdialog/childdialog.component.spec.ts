import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilddialogComponent } from './childdialog.component';

describe('ChilddialogComponent', () => {
  let component: ChilddialogComponent;
  let fixture: ComponentFixture<ChilddialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChilddialogComponent]
    });
    fixture = TestBed.createComponent(ChilddialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
