import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobanteDePagoComponent } from './comprobanteDePago.component';

describe('ComprobanteDePagoComponent', () => {
  let component: ComprobanteDePagoComponent;
  let fixture: ComponentFixture<ComprobanteDePagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprobanteDePagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprobanteDePagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
