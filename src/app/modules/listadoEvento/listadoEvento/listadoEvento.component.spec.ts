import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEventoComponent } from './listadoEvento.component';

describe('EventoComponent', () => {
  let component: ListadoEventoComponent;
  let fixture: ComponentFixture<ListadoEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
