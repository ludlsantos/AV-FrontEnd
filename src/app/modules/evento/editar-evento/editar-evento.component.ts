import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Evento } from 'src/app/modelos/evento';
import { EventoService } from 'src/app/services/evento.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css']
})
export class EditarEventoComponent implements OnInit {
  fgValidator!: FormGroup;
 evento:Evento = new Evento();
  
  constructor(private http: HttpClient ,private fb: FormBuilder, private eventoService: EventoService, private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {

    this.cargar();
   // this.FormBuilding();
  }
 
 /* FormBuilding(){
    this.fgValidator = this.fb.group({
      Nombre: this.fgValidator.get('nombre')?.value,
      Descripcion: this.fgValidator.get('descripcion')?.value,
      Tipo: this.fgValidator.get('tipo')?.value,
      Fecha: this.fgValidator.get('fecha')?.value,
      Duracion: this.fgValidator.get('duracion')?.value,
      callePuerta: this.fgValidator.get('callePuerta')?.value,
      barrio: this.fgValidator.get('barrio')?.value,
      ciudad: this.fgValidator.get('ciudad')?.value,
      NroCupos: this.fgValidator.get('cantidadCupos')?.value,
      CantidadMesas: this.fgValidator.get('cantidadMesas')?.value,
      CantidadAsientosMesa: this.fgValidator.get('cantidadAsientosMesa')?.value,
      PrecioAsiento: this.fgValidator.get('precio')?.value,
      Idioma: this.fgValidator.get('idioma')?.value,
      CriterioAsignacion: this.fgValidator.get('criterioAsignacion')?.value,
      ImagenPortada: this.fgValidator.get('archivosubido')?.value,
      EmpresaCreadora: "Traer de admin logueado"
     });  
  }
  */
 
  cargar():void{   
    this.activatedRoute.params.subscribe(
      //almacenar en una variable lo que me trae desde el enlace que viene con el id
      e=>{
        let id=e['id'];
    if(id){
      this.eventoService.get(id).subscribe(
        ev=>this.evento=ev

        );
    }
      }
    );
    }
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
*/
/*this.eventoService.get(2).toPromise().then(
    ev=>{
     this.evento=ev as Evento;
*/


