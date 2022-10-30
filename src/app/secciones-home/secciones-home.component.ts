import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/modelos/evento';
import { EventoService } from 'src/app/services/evento.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { JwtAuthService } from '../services/jwt-auth.service';


@Component({
  selector: 'app-secciones-home',
  templateUrl: './secciones-home.component.html',
  styleUrls: ['./secciones-home.component.css']
})
export class SeccionesHomeComponent implements OnInit {

  title= 'evento';
  public eventos: Array<Evento>=[]
    constructor(
      private eventoService: EventoService,
      public jwtAuthService: JwtAuthService
    ) {
  
      this.eventoService.getEventos().subscribe((resp: any)=> {
        console.log(resp)
        for (let eventoA of resp){
          if(eventoA.estadoEvento == "Activo"){
             this.eventos.push(eventoA)
          }
        }
          
        });
        
     }
  
  ngOnInit(): void {
  }

  

}
