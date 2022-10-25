import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Evento } from 'src/app/modelos/evento';
import { EventoService } from 'src/app/services/evento.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-listadoEvento',
  templateUrl: './listadoEvento.component.html',
  styleUrls: ['./listadoEvento.component.css']
})

export class ListadoEventoComponent implements OnInit {
  
  title= 'evento';
  public eventos: Array<Evento>=[]
  constructor(

    public eventoService: EventoService,
    private route:ActivatedRoute,
    private location: Location

  ) {

    this.eventoService.getEventos().subscribe((resp: any)=> {
      console.log(resp)
      this.eventos = resp
      
    })
   }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
   }

} 
