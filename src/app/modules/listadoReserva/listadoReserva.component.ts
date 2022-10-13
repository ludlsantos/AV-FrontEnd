
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/modelos/evento';
import { Reserva } from 'src/app/modelos/reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-listadoReserva',
  templateUrl: './listadoReserva.component.html',
  styleUrls: ['./listadoReserva.component.css']
})
export class ListadoReservaComponent implements OnInit {

  title = 'reserva';
  public reservas: Array<Reserva> = [];
  public reservasPorEvento: Array<Reserva> = [];
  eventoService!: EventoService;
  eventoId!: any;
  public eventos: Array<Evento>=[]
  //reserva!: Reserva;

  constructor(
    public reservaService: ReservaService,
    private route:ActivatedRoute
  ) {


    this.reservaService.getReservas().subscribe((resp: any) => {
    console.log(resp);
      this.reservas = resp;
    });
 this.CargarReserva();
}


  CargarReserva(): void {
   this.route.params.subscribe(
                  e=>{
                    let id=e['id'];
                if(id){
                  this.eventoId = id;
                  this.reservaService.getReservasEvento(this.eventoId).subscribe((resp: any) => {
                  
                    console.log(resp);
                    this.reservasPorEvento = resp;


                });
              
          }
        });
        
  }

  
  ngOnInit(): void {
  }

}
