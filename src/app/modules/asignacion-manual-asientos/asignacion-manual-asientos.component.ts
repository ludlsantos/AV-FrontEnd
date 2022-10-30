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
  reservados!: number;
  controles: any[] = [];
  valorBoton = "Guardar y continuar";
  asientosReservados= 0;
  asientosGuardados: Asiento[] = [];
  mesasGuardadas: Mesa[] = [];
  mesa!: Mesa;

  
  


  constructor(
    private fb: FormBuilder,
    private reservaService: ReservaService,
    private router: ActivatedRoute,
    private mesaService: MesaService,
    private asientoService: AsientoService,
    private route: Router,
    ) {
      
    
}


CargarId(): void{
  this.router.params.subscribe(
    e=>{
      let id=e['id'];
  if(id){
    this.reservaId = id;
  }
  this.reservaService.getReserva(this.reservaId).subscribe((resp: any) => {
    if(resp){
    this.reserva= resp;
    this.mesaService.getMesasPorEvento(this.reserva.evento.eventoId!).subscribe(data => {
      if(data){
      this.mesas = data;
      }else{
        alert("Ocurrió un error, intente nuevamente");
        this.route.navigate(['/home'])
        this.fgValidator.reset();
      }
    
    })
    
    
  }else{
    alert("Ocurrió un error, intente nuevamente");
    this.route.navigate(['/home'])
    this.fgValidator.reset();
  }
  });
  });


}

CargarId2(id: number): void{

    this.reservaId = id;
  
    this.reservaService.getReserva(this.reservaId).subscribe((resp: any) => {
      if(resp){
    this.reserva= resp;
    this.mesaService.getMesasPorEvento(this.reserva.evento.eventoId!).subscribe(data => {
      if(data){
      this.mesas = data;
      }
    })
    
  }else{
    alert("Ocurrió un error, intente nuevamente");
    this.route.navigate(['/home'])
    this.fgValidator.reset();
  }

  });

}



  ngOnInit(): void {
   
    this.FormBuilding();
    this.CargarId();

  }

    
  
  mesaSeleccionada () {
    //leer el valor seleccionado y en base a eso traer los asientos
  this.asientoService.getAsientosPorMesa(this.fgValidator.get('mesa')?.value).subscribe(data2 => {
    if(data2){
    this.mesaService.getMesa(this.fgValidator.get('mesa')?.value).subscribe(dataMesa =>{
      if(dataMesa){
      this.mesa=dataMesa;

    this.asientos = data2;
    //this.asientos;
    for (let asiento of this.asientos){
      var asignacionAsiento: string;
      asignacionAsiento = 'asiento' + asiento.nroAsiento!;
   
        if (asiento.idReserva != 0) {

          this.fgValidator.get(asignacionAsiento)?.disable();
           
        }
    }
  }else{
    alert("Ocurrió un error, intente nuevamente");
    this.route.navigate(['/home'])
    this.fgValidator.reset();
  }
  } )
}else{
  alert("Ocurrió un error, intente nuevamente");
    this.route.navigate(['/home'])
    this.fgValidator.reset();
}
  });}



FormBuilding(){
  this.fgValidator = this.fb.group({
    mesa: new FormControl,
    asiento: new FormControl,
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
  this.reservados = 0;


    for (let asiento of this.asientos){
      var asignacionAsiento: string;
      asignacionAsiento = 'asiento' + asiento.nroAsiento!;
      if (this.fgValidator.get(asignacionAsiento)?.value)
        {
          this.reservados = this.reservados +1;
          this.asientosReservados = this.asientosReservados +1;
        }

        }
        
    for (let asiento of this.asientos){
      var asignacionAsiento: string;
      asignacionAsiento = 'asiento' + asiento.nroAsiento!;
          // cambiar de cantidadReservas
        if (this.reservados >=  this.reserva.cantidadReservas || this.reserva.reservasSinAsignar! == 0) { 

            if (!this.fgValidator.get(asignacionAsiento)?.value)
            {
              this.fgValidator.get(asignacionAsiento)?.disable();
            } else{
            this.fgValidator.get(asignacionAsiento)?.enable();
            }


          }else{
            this.fgValidator.get(asignacionAsiento)?.enable();
          }


        }
        //deshabilito los asientos ya reservados
        for (let asiento of this.asientos){
          var asignacionAsiento: string;
          asignacionAsiento = 'asiento' + asiento.nroAsiento!;
       
            if (asiento.idReserva != 0) {

              this.fgValidator.get(asignacionAsiento)?.disable();
               
            }
        }
          //cambiar
          if (this.reservados >=  this.reserva.cantidadReservas || this.reserva.reservasSinAsignar! == 0) {
          this.valorBoton = "Guardar y terminar";

        }else {
          this.valorBoton = "Guardar y contunuar"
        }
      }
      guardar() {
        if (this.reservados == 0) {
          alert ("Debe seleccionar el o los asientos")
          return 
          
        }
        var asientosLocal: Asiento[] = [];
        for (let asiento of this.asientos){
          var asignacionAsiento: string;
          asignacionAsiento = 'asiento' + asiento.nroAsiento!;
        
            if (this.fgValidator.get(asignacionAsiento)?.value)
            {
              asientosLocal.push(asiento);
            }
          
        }
        

            const nuevaReserva: Reserva = {
              idReserva: this.reservaId,
              cliente: this.reserva.cliente,
              evento: this.reserva.evento,
              estadoReserva: "Asignada",
              comprobanteDePago: this.reserva.comprobanteDePago,
              asientos: asientosLocal,
              nombreEmpresa: this.reserva.nombreEmpresa,
              telefono: this.reserva.telefono,
              correoElectronico:this.reserva.correoElectronico,
              cantidadReservas: this.reserva.cantidadReservas,
              fechaReserva: this.reserva.fechaReserva,
              descripcionEstado: this.reserva.descripcionEstado,
              
            }
          
        
            this.reservaService.postReservarAsiento(nuevaReserva).subscribe(putReserva =>{
              if (putReserva != null) {
                alert("Reservado con exito");
                this.CargarId2(this.reserva.idReserva!)
              }
              else{
                alert("Ocurrió un error, por favor intente nuevamente.");
                this.CargarId2(this.reserva.idReserva!)
              }
            this.mesaSeleccionada();
           
            }) ;
          
            
          }
        }