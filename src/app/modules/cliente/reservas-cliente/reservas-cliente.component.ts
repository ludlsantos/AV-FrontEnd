import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/modelos/reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { localStorageJwt } from 'src/app/static/local-storage';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


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
    private location: Location,
    private route: Router,
  ) {


    
      this.correo = localStorage.getItem(localStorageJwt.LS_CORREO)!;
        const parse = JSON.parse(this.correo)
        this.clienteService.getClienteCorreo(parse).subscribe(dataA => {
            if(dataA){
            this.id = dataA.clienteId;
            this.reservaService.getReservas().subscribe((resp: any)=> {
            for(let reservaA of resp){
              if(reservaA.cliente.clienteId == this.id){
                this.reservas.push(reservaA)
              }
            }

    });
  }else{
    alert("Ocurrió un error, intente nuevamente");
    this.route.navigate(['/home'])
  }
  });
}
 
  
  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
   }

  }
