import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    public reservaService: ReservaService,
    private route:ActivatedRoute,
    private router: Router

  ) {


    this.reservaService.getReservas().subscribe((resp: any) => {
    console.log(resp);
      this.reservas = resp;
    });
 this.CargarReserva();
}

deshabilitar(reserva: Reserva): boolean{
   var estado = false;
    if(reserva.estadoReserva == "Pendiente de pago" && reserva.comprobanteDePago != null){
      estado = false;
    }else{
      estado = true;
    }
    
      return estado!;
  }


  CargarReserva(): void {
   this.route.params.subscribe(
                  e=>{
                    let id=e['id'];
                if(id){
                  this.eventoId = id;
                  this.reservaService.getReservasEvento(this.eventoId).subscribe((resp: any) => {
                  if(resp){
                    console.log(resp);
                    this.reservasPorEvento = resp;

                  }else{
                    alert("Ocurrió un error, intente nuevamente");
                    this.router.navigate(['/home'])
                  }
                });
              
          }
        });
        
  }

  
  ngOnInit(): void {
  }



}