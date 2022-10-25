import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/modelos/reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { localStorageJwt } from 'src/app/static/local-storage';
import { Location } from '@angular/common';


@Component({
  selector: 'app-reservas-cliente',
  templateUrl: './reservas-cliente.component.html',
  styleUrls: ['./reservas-cliente.component.css']
})
export class ReservasClienteComponent implements OnInit {

  title = 'reserva';
  public reservas: Array<Reserva> = [];
  correo: any;
  id: any;
  constructor(
    private reservaService: ReservaService,
    private clienteService: ClienteService,
    private location: Location
  ) {


    
      this.correo = localStorage.getItem(localStorageJwt.LS_CORREO)!;
        const parse = JSON.parse(this.correo)
        this.clienteService.getClienteCorreo(parse).subscribe(dataA => {
            this.id = dataA.clienteId;
            this.reservaService.getReservas().subscribe((resp: any)=> {
            for(let reservaA of resp){
              if(reservaA.cliente.clienteId == this.id){
                this.reservas.push(reservaA)
              }
            }

    });
  });
}
 
  
  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
   }

  }
