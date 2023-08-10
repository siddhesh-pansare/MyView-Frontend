import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenposComponent } from './openpos.component';

describe('OpenposComponent', () => {
  let component: OpenposComponent;
  let fixture: ComponentFixture<OpenposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenposComponent]
    });
    fixture = TestBed.createComponent(OpenposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
