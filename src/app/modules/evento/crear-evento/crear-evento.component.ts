import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Evento } from 'src/app/modelos/evento';
import { EventoService } from 'src/app/services/evento.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {

  fgValidator!: FormGroup;

  constructor(private http: HttpClient ,private fb: FormBuilder, private eventoService: EventoService) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.fgValidator = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      descripcion: ['', [Validators.required, Validators.minLength(15)]],
      tipo: ['', [Validators.required, Validators.minLength(1)]],
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.nullValidator]],
      duracion: ['', [Validators.required, Validators.minLength(1)]],
      callePuerta: ['', [Validators.required, Validators.minLength(5)]],
      barrio: ['', [Validators.required, Validators.minLength(3)]],
      ciudad: ['', [Validators.required, Validators.minLength(3)]],
      cantidadCupos: ['', [Validators.required, Validators.minLength(1)]],
      cantidadMesas: ['', [Validators.required, Validators.minLength(1)]],
      cantidadAsientosMesa: ['', [Validators.required, Validators.minLength(1)]],
      precio: ['', [Validators.required]],
      idioma: ['', [Validators.required, Validators.minLength(2)]],
      criterioAsignacion: ['', [Validators.required, Validators.minLength(2)]],
      archivosubido: ['', [Validators.nullValidator]]
     });
  }

  CrearEvento(){
    if(this.fgValidator.invalid){
      alert('Datos invalidos, porfavor verifique')
    }else{
      const evento: Evento = {
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
      }

      this.eventoService.crearEvento(evento).subscribe(data => {
        alert('Evento creado con éxito');
        this.fgValidator.reset();
      })
    }
  }

  get fgv(){
    return this.fgValidator.controls;
  }

}