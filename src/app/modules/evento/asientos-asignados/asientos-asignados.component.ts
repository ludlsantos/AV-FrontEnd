import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Asiento } from 'src/app/modelos/asiento';
import { Mesa } from 'src/app/modelos/mesa';
import { Reserva } from 'src/app/modelos/reserva';
import { AsientoService } from 'src/app/services/asiento.service';
import { EventoService } from 'src/app/services/evento.service';
import { MesaService } from 'src/app/services/mesa.service';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-asientos-asignados',
  templateUrl: './asientos-asignados.component.html',
  styleUrls: ['./asientos-asignados.component.css']
})
export class AsientosAsignadosComponent implements OnInit {


  fgValidator!: FormGroup;
  eventoId!: any;
  reserva!: Reserva;
  asientos: Asiento[] = [];
  mesa!: Mesa;
  mesas: Mesa[] = [];
  public reservas: Array<Reserva> = [];
   valorEstado = "";
  

  constructor(private fb: FormBuilder,
    private router: ActivatedRoute,
    private mesaService: MesaService,
    private asientoService: AsientoService,
    private eventoService: EventoService,
    private route: Router,) { }

  ngOnInit(): void {
     
    this.FormBuilding();
    this.CargarId();

  }

  FormBuilding(){
    this.fgValidator = this.fb.group({
      mesa: new FormControl,
  
    });}
  CargarId(): void{
    this.router.params.subscribe(
      e=>{
        let id=e['id'];
    if(id){
      this.eventoId = id;
      this.mesaService.getMesasPorEvento(this.eventoId!).subscribe(data => {
        if(data){
        this.mesas = data;
        }else{
          alert("Ocurrió un error, intente nuevamente");
          this.route.navigate(['/home'])
          this.fgValidator.reset();
        }
      
      });
      for(let mesa of this.mesas){
        
      }
      
      
    }else{
      alert("Ocurrió un error, intente nuevamente");
      this.route.navigate(['/home'])
      this.fgValidator.reset();
    }
    });
  
  
  }

  mesaSeleccionada () {
    //leer el valor seleccionado y en base a eso traer los asientos
  this.asientoService.getAsientosPorMesa(this.fgValidator.get('mesa')?.value).subscribe(data2 => {
    if(data2){
  /*   this.mesaService.getMesa(this.fgValidator.get('mesa')?.value).subscribe(dataMesa =>{
      if(dataMesa){
      this.mesa=dataMesa;
 */
    this.asientos = data2;
    //this.asientos;
    for (let asiento of this.asientos){
      var asignacionAsiento: string;
      asignacionAsiento = 'asiento' + asiento.nroAsiento!;
      
    }
  }
  });
}

estado(asiento: Asiento) : boolean{

  if (asiento.idReserva != 0) {
    this.valorEstado = "Reservado";

  }else {
   this.valorEstado = "No reservado"
  }
  return true;
}
}

