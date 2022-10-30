import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsientosAsignadosComponent } from './asientos-asignados.component';

describe('AsientosAsignadosComponent', () => {
  let component: AsientosAsignadosComponent;
  let fixture: ComponentFixture<AsientosAsignadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsientosAsignadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsientosAsignadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
