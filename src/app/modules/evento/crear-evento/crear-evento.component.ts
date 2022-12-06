


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Evento } from 'src/app/modelos/evento';
import { EventoService } from 'src/app/services/evento.service';
import { HttpClient } from '@angular/common/http';
import { Mesa } from 'src/app/modelos/mesa';
import { localStorageJwt } from 'src/app/static/local-storage';
import { Administrador } from 'src/app/modelos/administrador';
import { AdministradorService } from 'src/app/services/administrador.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {
// test
  fgValidator!: FormGroup;
  mesas!: null;
  correo!: any;
  admin!: Administrador;
  public archivo = "";
    public nombreArchivo= "" ;
    archivos:any[] = [];
    loading!: boolean;
    evento!: Evento;


  constructor(
    private http: HttpClient,
    private adminService: AdministradorService,
    private fb: FormBuilder, 
    private eventoService: EventoService,
    private location: Location,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.fgValidator = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      descripcion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      tipo: ['', [Validators.required, Validators.minLength(1)]],
      duracion: ['', [Validators.required, Validators.minLength(1)]],
      fecha: ['', [Validators.required]],
      callePuerta: ['', [Validators.required, Validators.minLength(5)]],
      barrio: ['', [Validators.required, Validators.minLength(3)]],
      ciudad: ['', [Validators.required, Validators.minLength(3)]],
      cantidadCupos: ['', [Validators.required, Validators.minLength(1)]],
      precio: ['', [Validators.required]],
      idioma: ['', [Validators.required, Validators.minLength(2)]],
      criterioAsignacion: [''],
      tipoAsignacion: [''],
      moneda: [''],
      archivosubido: ['', [Validators.required]]
     });
  }

  CrearEvento(){
    if(this.fgValidator.invalid){
      alert('Datos invalidos, por favor verifique')
    }else{
    

      this.correo = localStorage.getItem(localStorageJwt.LS_CORREO)!;
      const parse = JSON.parse(this.correo);
      this.adminService.getAdmin(parse).subscribe(data =>{
      
          this.admin = data;

          if(this.archivos.length === 0){
               this.loading = false;
          }else{
               this.loading = true;
                         
    

      const evento: Evento = {
        nombre: this.fgValidator.get('nombre')?.value,
        descripcion: this.fgValidator.get('descripcion')?.value,
        tipo: this.fgValidator.get('tipo')?.value,
        fechaHora: this.fgValidator.get('fecha')?.value,
        duracion: this.fgValidator.get('duracion')?.value + " horas",
        callePuerta: this.fgValidator.get('callePuerta')?.value,
        barrio: this.fgValidator.get('barrio')?.value,
        ciudad: this.fgValidator.get('ciudad')?.value,
        nroCupos: this.fgValidator.get('cantidadCupos')?.value,
        moneda: this.fgValidator.get('moneda')?.value,
        precioAsiento: this.fgValidator.get('precio')?.value,
        idioma: this.fgValidator.get('idioma')?.value,
        criterioAsignacion: this.fgValidator.get('criterioAsignacion')?.value,
        tipoAsignacion: this.fgValidator.get('tipoAsignacion')?.value,
        empresaCreadora: this.admin.nombreEmpresa,
        estadoEvento: "Activo",
        archivo: this.archivo,
        imagenPortada: this.nombreArchivo


      }
      
      // evento.mesas!.length = evento.cantidadMesas;

      this.eventoService.crearEvento(evento).subscribe(data => {
     
        this.loading = false;
        alert('Evento creado con éxito');
        this.fgValidator.reset();
        this.router.navigate(['/','home'])
        
      });
      }
    
    });
    }
  }

  get fgv(){
    return this.fgValidator.controls;
  }
  
  goBack(): void {
    this.location.back();
   }

   uploadFile(files: any){
    const fileToUpload = files[0] as File;
    var formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    const reader = new FileReader();
    reader.readAsDataURL(fileToUpload);
    reader.onload = (event: any) => {
    this.archivo = event.target.result
    this.nombreArchivo = fileToUpload.name
    this.archivos.push(this.archivo)
      }

}
}
