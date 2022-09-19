import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from 'src/app/services/evento.service';
import { Evento } from 'src/app/modelos/evento';

@Component({
  selector: 'app-listadoEvento',
  templateUrl: './listadoEvento.component.html',
  styleUrls: ['./listadoEvento.component.css']
})
export class ListadoEventoComponent implements OnInit {

  title= 'evento';
public eventos: Array<Evento>=[]
  constructor(
    private eventoService: EventoService,
    private router: Router,
    private route:ActivatedRoute
  ) {

    this.eventoService.getEventos().subscribe((resp: any)=> {
      console.log(resp)
      this.eventos = resp
      
    })
   }

  ngOnInit(): void {
  }

} 
