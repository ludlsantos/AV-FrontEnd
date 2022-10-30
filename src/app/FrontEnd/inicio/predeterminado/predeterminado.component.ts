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


    this.eventoService.getEventos().subscribe((resp: any)=> {
      if(resp == null){
        alert("Ocurrió un error, intente nuevamente");
      }else{
      for (let eventoA of resp){
        if(eventoA.estadoEvento == "Activo"){
           this.eventos.push(eventoA)
        }
      }
    }
      });
  }

  ngOnInit(): void {

  }

}


