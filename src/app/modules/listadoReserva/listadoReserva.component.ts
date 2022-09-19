
import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/modelos/reserva';
import { ReservaService } from 'src/app/services/reserva.service';


@Component({
  selector: 'app-listadoReserva',
  templateUrl: './listadoReserva.component.html',
  styleUrls: ['./listadoReserva.component.css']
})
export class ListadoReservaComponent implements OnInit {

  title = 'reserva';
  public reservas: Array<Reserva> = [];
  constructor(
    private reservaService: ReservaService

  ) {


    this.reservaService.getReservas().subscribe((resp: any) => {
      console.log(resp);
      this.reservas = resp;

    });
  }

  
  ngOnInit(): void {
  }

}

