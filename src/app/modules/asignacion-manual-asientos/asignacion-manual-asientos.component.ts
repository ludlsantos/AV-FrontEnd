import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Asiento } from 'src/app/modelos/asiento';
import { Evento } from 'src/app/modelos/evento';
import { Mesa } from 'src/app/modelos/mesa';
import { Reserva } from 'src/app/modelos/reserva';
import { EventoService } from 'src/app/services/evento.service';
import { MesaService } from 'src/app/services/mesa.service';
import { ReservaService } from 'src/app/services/reserva.service';


@Component({
  selector: 'app-asignacion-manual-asientos',
  templateUrl: './asignacion-manual-asientos.component.html',
  styleUrls: ['./asignacion-manual-asientos.component.css']
})
export class AsignacionManualAsientosComponent implements OnInit {

  mesas: Mesa[] = [];
  fgValidator!: FormGroup;
  reservaId!: any;
  reserva!: Reserva;
  asientos: Asiento[] = [];
  



  constructor(
    private eventoService: EventoService, 
    private fb: FormBuilder,
    private reservaService: ReservaService,
    private route: ActivatedRoute,
    private mesaService: MesaService,
    ) {
      
    
}


CargarId(): void{
  this.route.params.subscribe(
    e=>{
      let id=e['id'];
  if(id){
    this.reservaId = id;
  }
  this.reservaService.getReserva(this.reservaId).subscribe((resp: any) => {
    this.reserva= resp;
    this.mesaService.getMesasPorEvento(this.reserva.evento.eventoId!).subscribe(data => {
      alert('Hola')
      this.mesas = data;
    })
    
//     this.eventoService.arregloMesas(this.reservaId).subscribe(data => {
//     this.mesas = data;
//     console.log(data);
   

 

//  });
  });
  });


}

  ngOnInit(): void {
   
    this.FormBuilding();
    this.CargarId();

  }

    
  






FormBuilding(){
  this.fgValidator = this.fb.group({
    mesa: new FormControl,
    asiento1: new FormControl,
    asiento2: new FormControl,
    asiento3: new FormControl,
    asiento4: new FormControl,
    asiento5: new FormControl,
    asiento6: new FormControl,
    asiento7: new FormControl,
    asiento8: new FormControl,
    asiento9: new FormControl,
    asiento10: new FormControl,

  });}


  asignacion(){
  var reservados = 0;

  for (let mesa of this.mesas){
    this.asientos!= mesa.asientos;

    for (let asiento of this.asientos){

      if(this.fgValidator.get('asiento.nroAsiento')?.value){
        reservados = reservados +1;

      }
      
      if (reservados >=  this.reserva.cantidadReservas)
      {
        this.fgValidator.get('asiento.nroAsiento')?.disable();
    }
    else{
      this.fgValidator.get('asiento.nroAsiento')?.enable();

    }


  
  }

  if (this.fgValidator.get('asiento1')?.value)
  {
    reservados = reservados +1;
  }
  if (this.fgValidator.get('asiento2')?.value)
  {
    reservados = reservados +1;
  }
  if (this.fgValidator.get('asiento3')?.value)
  {
    reservados = reservados +1;
  }
  if (this.fgValidator.get('asiento4')?.value)
  {
    reservados = reservados +1;
  }
  if (this.fgValidator.get('asiento5')?.value)
  {
    reservados = reservados +1;
  }
  if (this.fgValidator.get('asiento6')?.value)
  {
    reservados = reservados +1;
  }
  if (this.fgValidator.get('asiento7')?.value)
  {
    reservados = reservados +1;
  }
  if (this.fgValidator.get('asiento8')?.value)
  {
    reservados = reservados +1;
  }
  if (this.fgValidator.get('asiento9')?.value)
  {
    reservados = reservados +1;
  }
  if (this.fgValidator.get('asiento10')?.value)
  {
    reservados = reservados +1;
  }
  if (reservados >=  this.reserva.cantidadReservas)
  {

    if (!this.fgValidator.get('asiento1')?.value)
    {
      this.fgValidator.get('asiento1')?.disable();
    }
    if (!this.fgValidator.get('asiento2')?.value)
    {
      this.fgValidator.get('asiento2')?.disable();
    }
    if (!this.fgValidator.get('asiento3')?.value)
    {
      this.fgValidator.get('asiento3')?.disable();
    }
    if (!this.fgValidator.get('asiento4')?.value)
    {
      this.fgValidator.get('asiento4')?.disable();
    }
    if (!this.fgValidator.get('asiento5')?.value)
    {
      this.fgValidator.get('asiento5')?.disable();
    }
    if (!this.fgValidator.get('asiento6')?.value)
    {
      this.fgValidator.get('asiento6')?.disable();
    }
    if (!this.fgValidator.get('asiento7')?.value)
    {
      this.fgValidator.get('asiento7')?.disable();
    }
    if (!this.fgValidator.get('asiento8')?.value)
    {
      this.fgValidator.get('asiento8')?.disable();
    }
    if (!this.fgValidator.get('asiento9')?.value)
    {
      this.fgValidator.get('asiento9')?.disable();
    }
    if (!this.fgValidator.get('asiento10')?.value)
    {
      this.fgValidator.get('asiento10')?.disable();
    }

  }
  else{
    this.fgValidator.get('asiento1')?.enable();
    this.fgValidator.get('asiento2')?.enable();
    this.fgValidator.get('asiento3')?.enable();
    this.fgValidator.get('asiento4')?.enable();
    this.fgValidator.get('asiento5')?.enable();
    this.fgValidator.get('asiento6')?.enable();
    this.fgValidator.get('asiento7')?.enable();
    this.fgValidator.get('asiento8')?.enable();
    this.fgValidator.get('asiento9')?.enable();
    this.fgValidator.get('asiento10')?.enable();
  }

 }


}


}
