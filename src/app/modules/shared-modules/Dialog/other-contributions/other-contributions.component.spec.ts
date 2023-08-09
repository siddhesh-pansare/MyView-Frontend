import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherContributionsComponent } from './other-contributions.component';

describe('OtherContributionsComponent', () => {
  let component: OtherContributionsComponent;
  let fixture: ComponentFixture<OtherContributionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherContributionsComponent]
    });
    fixture = TestBed.createComponent(OtherContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
