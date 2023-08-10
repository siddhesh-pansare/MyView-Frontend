import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReamrkDialogueComponent } from './reamrk-dialogue.component';

describe('ReamrkDialogueComponent', () => {
  let component: ReamrkDialogueComponent;
  let fixture: ComponentFixture<ReamrkDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReamrkDialogueComponent]
    });
    fixture = TestBed.createComponent(ReamrkDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
