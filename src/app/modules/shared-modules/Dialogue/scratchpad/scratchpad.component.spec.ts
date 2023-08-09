import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScratchpadComponent } from './scratchpad.component';

describe('ScratchpadComponent', () => {
  let component: ScratchpadComponent;
  let fixture: ComponentFixture<ScratchpadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScratchpadComponent]
    });
    fixture = TestBed.createComponent(ScratchpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
