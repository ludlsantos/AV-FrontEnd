import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoReservasActivasComponent } from './listado-reservas-activas.component';

describe('ListadoReservasActivasComponent', () => {
  let component: ListadoReservasActivasComponent;
  let fixture: ComponentFixture<ListadoReservasActivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoReservasActivasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoReservasActivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
