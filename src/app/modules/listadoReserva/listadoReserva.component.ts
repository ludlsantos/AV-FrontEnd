
import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/modelos/reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import { Evento } from 'src/app/modelos/evento';


@Component({
  selector: 'app-listadoReserva',
  templateUrl: './listadoReserva.component.html',
  styleUrls: ['./listadoReserva.component.css']
})
export class ListadoReservaComponent implements OnInit {

  title = 'reserva';
  public reservas: Array<Reserva> = []
  constructor(
    private reservaService: ReservaService

  ) {


    this.reservaService.getReservas().subscribe((resp: any) => {

      for (let reservaA of resp){
        if(reservaA.evento.eventoId == "2"){
           this.reservas.push(reservaA)
        }
      }

      console.log(resp);
      

    });
  }

  
  ngOnInit(): void {
  }

}

