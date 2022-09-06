import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/modelos/evento';
import { EventoService } from 'src/app/services/evento.service';


@Component({
  selector: 'app-secciones-home',
  templateUrl: './secciones-home.component.html',
  styleUrls: ['./secciones-home.component.css']
})
export class SeccionesHomeComponent implements OnInit {

  title= 'evento';
  public eventos: Array<any>=[]
    constructor(
      private eventoService: EventoService
    ) {
  
      this.eventoService.getEventos().subscribe((resp: any)=> {
        console.log(resp)
        this.eventos = resp
        
      })
     }
  
  ngOnInit(): void {
  }

}
