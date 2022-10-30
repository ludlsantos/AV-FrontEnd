import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Evento } from 'src/app/modelos/evento';
import { EventoService } from 'src/app/services/evento.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css']
})
export class EditarEventoComponent implements OnInit {
  fgValidator!: FormGroup;
  evento:Evento = new Evento();
  eventoident!:any;



  constructor(
    private fb: FormBuilder,
     private eventoService: EventoService,
      private activatedRoute:ActivatedRoute,
       private router:Router,
       ) { }
   

  ngOnInit(): void {

    this.cargar();
    this.FormBuilding();

  };
 

  FormBuilding(){
    
    this.fgValidator = this.fb.group({

        nombre: ['', [Validators.required, Validators.minLength(2)]],
        descripcion: ['', [Validators.required, Validators.minLength(10)]],
        tipo: ['', [Validators.required, Validators.minLength(1)]],
        duracion: ['', [Validators.required, Validators.minLength(1)]],
        callePuerta: ['', [Validators.required, Validators.minLength(5)]],
        barrio: ['', [Validators.required, Validators.minLength(3)]],
        ciudad: ['', [Validators.required, Validators.minLength(3)]],
        cantidadCupos: ['', [Validators.required, Validators.minLength(1)]],
        cantidadMesas:  ['', [Validators.required]],
        cantidadAsientosMesa:  ['', [Validators.required]],
        precioAsiento: ['', [Validators.required]],
        idioma: ['', [Validators.required, Validators.minLength(2)]],
        criterioAsignacion:  ['', [Validators.required]],
        tipoAsignacion:  ['', [Validators.required]],
        moneda:  ['', [Validators.required]],
        empresaCreadora:   ['', [Validators.required]],
        imagenPortada:  ['', [Validators.required]],
        archivosubido: ['', [Validators.nullValidator]],
        estadoEvento: ['', [Validators.required]],
   });  
}
  cargar():void{   
    this.activatedRoute.params.subscribe(
   
      e=>{
        let id=e['id'];
    if(id){
      this.eventoident = id;
      this.eventoService.get(id).subscribe(
        ev=> { this.evento=ev;
        
        this.fgValidator.get('tipo')?.setValue(this.evento.tipo);
        this.fgValidator.get('nombre')?.setValue(this.evento.nombre);
        this.fgValidator.get('descripcion')?.setValue(this.evento.descripcion);
        this.fgValidator.get('duracion')?.setValue(this.evento.duracion);
        this.fgValidator.get('callePuerta')?.setValue(this.evento.callePuerta);
        this.fgValidator.get('barrio')?.setValue(this.evento.barrio);
        this.fgValidator.get('ciudad')?.setValue(this.evento.ciudad);
        this.fgValidator.get('cantidadCupos')?.setValue(this.evento.nroCupos);
        this.fgValidator.get('cantidadMesas')?.setValue(this.evento.cantidadMesas);
        this.fgValidator.get('cantidadAsientosMesa')?.setValue(this.evento.cantidadAsientosMesa);
        this.fgValidator.get('moneda')?.setValue(this.evento.moneda);
        this.fgValidator.get('precioAsiento')?.setValue(this.evento.precioAsiento);
        this.fgValidator.get('idioma')?.setValue(this.evento.idioma);
        this.fgValidator.get('criterioAsignacion')?.setValue(this.evento.criterioAsignacion);
        this.fgValidator.get('tipoAsignacion')?.setValue(this.evento.tipoAsignacion);
        this.fgValidator.get('empresaCreadora')?.setValue(this.evento.empresaCreadora);
        this.fgValidator.get('imagenPortada')?.setValue(this.evento.imagenPortada);
        this.fgValidator.get('estadoEvento')?.setValue(this.evento.estadoEvento);
   
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
        duracion: this.fgValidator.get('duracion')?.value + " horas",
        callePuerta: this.fgValidator.get('callePuerta')?.value,
        barrio: this.fgValidator.get('barrio')?.value,
        ciudad: this.fgValidator.get('ciudad')?.value,
        nroCupos: this.fgValidator.get('cantidadCupos')?.value,
        cantidadMesas:this.fgValidator.get('cantidadMesas')?.value,
        cantidadAsientosMesa:this.fgValidator.get('cantidadAsientosMesa')?.value,
        moneda: this.fgValidator.get('moneda')?.value,
        precioAsiento: this.fgValidator.get('precioAsiento')?.value,
        idioma: this.fgValidator.get('idioma')?.value,
        criterioAsignacion: this.fgValidator.get('criterioAsignacion')?.value,
        tipoAsignacion: this.fgValidator.get('tipoAsignacion')?.value,
        imagenPortada: this.fgValidator.get('imagenPortada')?.value,
        empresaCreadora:this.fgValidator.get('empresaCreadora')?.value,
        estadoEvento: this.fgValidator.get('estadoEvento')?.value,
      }  
    

      this.eventoService.update( this.eventoident, allEvento).subscribe(data => {
        if(data){
          this.eventoService.eventoModificado(this.eventoident).subscribe(dataA =>{
            if(dataA){
              alert('Evento actualizado con éxito');
              this.router.navigate(['/listadoEvento/listadoEvento']);
              this.fgValidator.reset();
            } alert('Ocurrió un error, intente nuevamente')
          });
       
        }else{
          alert('Ocurrió un error, intente nuevamente')
        }
      });
    }
    }
