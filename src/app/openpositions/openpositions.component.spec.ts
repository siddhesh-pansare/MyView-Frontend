import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenpositionsComponent } from './openpositions.component';

describe('OpenpositionsComponent', () => {
  let component: OpenpositionsComponent;
  let fixture: ComponentFixture<OpenpositionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenpositionsComponent]
    });
    fixture = TestBed.createComponent(OpenpositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
