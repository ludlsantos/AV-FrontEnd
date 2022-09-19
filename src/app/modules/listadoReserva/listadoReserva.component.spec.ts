import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoReservaComponent } from './listadoReserva.component';


describe('ListadoReservaComponent', () => {
  let component: ListadoReservaComponent;
  let fixture: ComponentFixture<ListadoReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoReservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
