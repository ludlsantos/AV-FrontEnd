import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/modelos/evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-predeterminado',
  templateUrl: './predeterminado.component.html',
  styleUrls: ['./predeterminado.component.css'],
  
})
export class PredeterminadoComponent implements OnInit {


  eventos: Evento[] = [];
  
  constructor(private eventoService : EventoService) {

  }

  ngOnInit(): void {

  }

}


