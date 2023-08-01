import { ComponentFixture, TestBed } from '@angular/core/testing';


import { ReporteesComponent } from './reportees.component';

describe('ReporteesComponent', () => {
  let component: ReporteesComponent;
  let fixture: ComponentFixture<ReporteesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteesComponent]
    });
    fixture = TestBed.createComponent(ReporteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
