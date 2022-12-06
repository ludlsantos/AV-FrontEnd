import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Evento } from 'src/app/modelos/evento';
import { EventoService } from 'src/app/services/evento.service';
import { Location } from '@angular/common';


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
    private location: Location,
    private route: Router,
    private router: ActivatedRoute

  ) {

    this.eventoService.getEventos().subscribe((resp: any)=> {
      if(resp){
      console.log(resp)
      this.eventos = resp
      }else{
        alert("Ocurrió un error, intente nuevamente");
        this.route.navigate(['/home'])
      }
    })
   }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
   }

   deshabilitar(evento: Evento): boolean{
    var estado = false;
     if(evento.tipoAsignacion == "Automatico"){
       estado = true;
     }else{
       estado = false;
     }
     
       return estado!;
   }

} 
