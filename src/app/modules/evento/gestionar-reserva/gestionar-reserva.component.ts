import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from 'src/app/modelos/reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import { HttpClient } from '@angular/common/http';
import { EstadoReserva } from 'src/app/modelos/estadoReserva';


@Component({
  selector: 'app-gestionar-reserva',
  templateUrl: './gestionar-reserva.component.html',
  styleUrls: ['./gestionar-reserva.component.css']
})

export class GestionarReservaComponent implements OnInit {

  fgValidator!: FormGroup;
  reserva:Reserva = new Reserva();
  reservaident!:any;
 
  constructor(
    private http: HttpClient, 
    private fb: FormBuilder, 
    private reservaService: ReservaService, 
    private activatedRoute:ActivatedRoute, 
    private router:Router) { }
  

  ngOnInit(): void {
    
    this.getReservaId();
  this.FormBuilding();
  
  
  };

  
  FormBuilding(){
    
    this.fgValidator = new FormGroup({
     idReserva: new FormControl(''),
    nombreCliente: new FormControl(''),
    apellido: new FormControl(''),
    nombreEvento:new FormControl(''),
    estado:new FormControl(''),
    estaReserva:new FormControl(''),
    descripcion:new FormControl(''),
    comprobante:new FormControl(''),

    
   });  
  }

   getReservaId():void{   
    this.activatedRoute.params.subscribe(
      
      e=>{
        let id=e['id'];
        
    if(id){
      this.reservaident! = id;
      this.reservaService.get(id).subscribe(
      
        re=> { this.reserva=re; 
          this.fgValidator.get('idReserva')?.setValue(this.reserva.idReserva);
          this.fgValidator.get('nombreCliente')?.setValue(this.reserva.cliente.nombre);
          this.fgValidator.get('apellido')?.setValue(this.reserva.cliente.apellidos);
          this.fgValidator.get('nombreEvento')?.setValue(this.reserva.evento.nombre);
         this.fgValidator.get('estado')?.setValue(this.reserva.estadoReserva);
         this.fgValidator.get('estaReserva')?.setValue(this.reserva.estadoReserva);
         this.fgValidator.get('descEstado')?.setValue(this.reserva.descripcionEstado);
         this.fgValidator.get('descripcion')?.setValue(this.reserva.descripcionEstado);
         this.fgValidator.get('comprobante')?.setValue(this.reserva.comprobanteDePago);
         this.reserva.ruta =  "http://montevideoit-001-site5.htempurl.com/img/" + (this.reserva.idReserva!) + "_" +(this.reserva.comprobanteDePago!.nombre!);

         
          
        }
        )
        
    }
      }
    );
}


updEstadoReserva(){
      const allReservas: EstadoReserva = {

               idReserva: this.reservaident,
      
             // estadoReserva : this.fgValidator.get('estado')?.value,
            estadoReserva: this.fgValidator.get('estaReserva')?.value,
            descripcionEstado: this.fgValidator.get('descripcion')?.value
        
      }  
      this.reservaService.updateEstadoReserva(allReservas).subscribe(data => {
        alert('El estado de la reserva fue actualizado con éxito');
        this.router.navigate(['/listadoEvento/listadoEvento']);
        this.fgValidator.reset();
      });
 

}
}



  




