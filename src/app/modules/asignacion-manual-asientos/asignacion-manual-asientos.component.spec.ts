import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionManualAsientosComponent } from './asignacion-manual-asientos.component';

describe('AsignacionManualAsientosComponent', () => {
  let component: AsignacionManualAsientosComponent;
  let fixture: ComponentFixture<AsignacionManualAsientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionManualAsientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignacionManualAsientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
