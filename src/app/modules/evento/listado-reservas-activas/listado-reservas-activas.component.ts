import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
    private router: Router
  ) {
    

   
 
this.CargarId();
this.reservaService.getReservasActivas(this.eventoId).subscribe((resp: any) => {
  if(resp){
  this.reservasActivas= resp;
  }else{
    alert("Ocurrió un error, intente nuevamente");
    this.router.navigate(['/home'])
  }
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
  
