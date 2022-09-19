import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Evento } from 'src/app/modelos/evento';
import { EventoService } from 'src/app/services/evento.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';


@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css']
})
export class EditarEventoComponent implements OnInit {
  fgValidator!: FormGroup;
 evento:Evento = new Evento();
 eventoident!:any;
  constructor(private http: HttpClient ,private fb: FormBuilder, private eventoService: EventoService, private activatedRoute:ActivatedRoute, private router:Router) { }
   

  ngOnInit(): void {

    this.cargar();
    //this.update();
    this.FormBuilding();

  };


  FormBuilding(){
    
    this.fgValidator = new FormGroup({
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    tipo:new FormControl(''),
    fecha:new FormControl(''),
    duracion:new FormControl(''),
    callePuerta: new FormControl(''),
    barrio:new FormControl(''),
    ciudad:new FormControl(''),
    nroCupos: new FormControl(''),
    cantidadMesas: new FormControl(''),
    cantidadAsientosMesa: new FormControl(''),
    precioAsiento: new FormControl(''),
    idioma: new FormControl(''),
    criterioAsignacion: new FormControl(''),
    imagenPortada: new FormControl(''),
    empresaCreadora: new FormControl(''),
    
   });  
}
  cargar():void{   
    this.activatedRoute.params.subscribe(
      //almacenar en una variable lo que me trae desde el enlace que viene con el id
      e=>{
        let id=e['id'];
    if(id){
      this.eventoident = id;
      this.eventoService.get(id).subscribe(
        ev=> { this.evento=ev;
        
        this.fgValidator.get('tipo')?.setValue(this.evento.tipo);
        //eventoId: this.eventoident,
        this.fgValidator.get('nombre')?.setValue(this.evento.nombre);
        this.fgValidator.get('descripcion')?.setValue(this.evento.descripcion);
        this.fgValidator.get('tipo')?.setValue(this.evento.tipo);
        this.fgValidator.get('fecha')?.setValue(this.evento.fecha);
        this.fgValidator.get('duracion')?.setValue(this.evento.duracion);
        this.fgValidator.get('callePuerta')?.setValue(this.evento.callePuerta);
        this.fgValidator.get('barrio')?.setValue(this.evento.barrio);
        this.fgValidator.get('ciudad')?.setValue(this.evento.ciudad);
        this.fgValidator.get('nroCupos')?.setValue(this.evento.nroCupos);
        this.fgValidator.get('cantidadMesas')?.setValue(this.evento.cantidadMesas);
        this.fgValidator.get('cantidadAsientosMesa')?.setValue(this.evento.cantidadAsientosMesa);
        this.fgValidator.get('precioAsiento')?.setValue(this.evento.precioAsiento);
        this.fgValidator.get('idioma')?.setValue(this.evento.idioma);
        this.fgValidator.get('criterioAsignacion')?.setValue(this.evento.criterioAsignacion);
        this.fgValidator.get('archivosubido')?.setValue(this.evento.imagenPortada)
        //empresaCreadora: "Traer de admin logueado"
        }
        );
        
    }
      }
    );
    }

    
    update(){
     const allEvento: Evento = {
        eventoId: this.eventoident,
        nombre: this.fgValidator.get('nombre')?.value,
        descripcion: this.fgValidator.get('descripcion')?.value,
        tipo: this.fgValidator.get('tipo')?.value,
        fecha: this.fgValidator.get('fecha')?.value,
        duracion: this.fgValidator.get('duracion')?.value,
        callePuerta: this.fgValidator.get('callePuerta')?.value,
        barrio: this.fgValidator.get('barrio')?.value,
        ciudad: this.fgValidator.get('ciudad')?.value,
        nroCupos: this.fgValidator.get('nroCupos')?.value,
        cantidadMesas: this.fgValidator.get('cantidadMesas')?.value,
        cantidadAsientosMesa: this.fgValidator.get('cantidadAsientosMesa')?.value,
        precioAsiento: this.fgValidator.get('precioAsiento')?.value,
        idioma: this.fgValidator.get('idioma')?.value,
        criterioAsignacion: this.fgValidator.get('criterioAsignacion')?.value,
        imagenPortada: this.fgValidator.get('archivosubido')?.value,
        empresaCreadora: "Traer de admin logueado"
      }   
      this.eventoService.update( this.eventoident, allEvento).subscribe(data => {
        alert(data)
        alert('Evento actualizado con éxito');
        this.fgValidator.reset();
      });
 

}

/*
cargar():void{   
  this.activatedRoute.params.subscribe(
    //almacenar en una variable lo que me trae desde el enlace que viene con el id
    e=>{
      let id=e['id'];
      if(id){
        alert('texto'+id);

        this.eventoService.get(id).subscribe(
          ev=>{this.evento=ev ;
          alert(ev.cantidadMesas);

        this.http.get('https://localhost:44319/API_1_0/Eventos/2').toPromise().then(
          ev=>{this.evento=ev as Evento ;
          alert(this.evento.eventoId);

          } );
      }
       }
  );

  }
  
       
    }
  
    

