import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from 'src/app/modelos/evento';
import { EventoService } from 'src/app/services/evento.service';


@Component({
  selector: 'app-listadoEvento',
  templateUrl: './listadoEvento.component.html',
  styleUrls: ['./listadoEvento.component.css']
})
export class ListadoEventoComponent implements OnInit {

  title= 'evento';
public eventos: Array<Evento>=[]
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
