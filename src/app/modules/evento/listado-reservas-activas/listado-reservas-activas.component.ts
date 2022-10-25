import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reserva } from 'src/app/modelos/reserva';
import { ReservaService } from 'src/app/services/reserva.service';


@Component({
  selector: 'app-listado-reservas-activas',
  templateUrl: './listado-reservas-activas.component.html',
  styleUrls: ['./listado-reservas-activas.component.css'],
})
export class ListadoReservasActivasComponent implements OnInit {

  public reservasActivas: Array<Reserva> = [];
  eventoId!: any;
  constructor(
    private reservaService: ReservaService,
    private route:ActivatedRoute,

  ) {
    

   
 
this.CargarId();
this.reservaService.getReservasActivas(this.eventoId).subscribe((resp: any) => {
  this.reservasActivas= resp;
});
}
   CargarId(): void{
        this.route.params.subscribe(
          e=>{
            let id=e['id'];
        if(id){
          this.eventoId = id;
        }
        });
      
   }




  ngOnInit(): void {

      
  }

}
  
