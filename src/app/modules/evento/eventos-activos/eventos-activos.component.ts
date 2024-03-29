import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from 'src/app/modelos/evento';
import { Location } from '@angular/common';
import { EventoService } from 'src/app/services/evento.service';


@Component({
  selector: 'app-eventos-activos',
  templateUrl: './eventos-activos.component.html',
  styleUrls: ['./eventos-activos.component.css']
})

export class EventosActivosComponent implements OnInit {

  
  title= 'evento';
public eventos: Array<Evento>=[]
  constructor(

    public eventoService: EventoService,
    private location: Location,
    private route: Router

  ) {

    this.eventoService.getEventos().subscribe((resp: any)=> {
      if(resp){
      for (let eventoA of resp){
        if(eventoA.estadoEvento == "Activo"){
           this.eventos.push(eventoA)
        }
      }
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
