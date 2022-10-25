import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente';
import { EditarCliente } from 'src/app/modelos/editarCliente';
import { Login } from 'src/app/modelos/login';
import { ClienteService } from 'src/app/services/cliente.service';
import { LoginService } from 'src/app/services/login.service';
import { localStorageJwt } from 'src/app/static/local-storage';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

//  tipoDocumento = [
  //  {name:'CI', description: ''},
    //{name: 'PASAPORTE', description: ''},
  
  //];
  //selected: string = 'CI';
  fgValidator!: FormGroup;
  correo!:string;
  id!: any;
  correoElectronico!: string;
  constructor(
    private fb: FormBuilder, 
    private clienteService: ClienteService,  
    private activatedRoute:ActivatedRoute, 
    private loginService: LoginService,
    private location: Location
    ) {
   
    }


  ngOnInit(): void {
    
    this.FormBuilding();
      this.getDataOfRecord();
     // this.EditarCliente();
  }

  FormBuilding(){
    this.fgValidator = this.fb.group({
      clienteId: ['', [Validators.required]],
      tipoDocumento: ['', [Validators.required]],
      nroDocumento: ['', [Validators.required, Validators.minLength(7)]],
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      telefono: ['', [Validators.required, Validators.minLength(8)]],
      cargoProfesion: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
     });  
  }

//traigo los datos
  getDataOfRecord(){

    this.correo = localStorage.getItem(localStorageJwt.LS_CORREO)!;
        const parse = JSON.parse(this.correo)
        this.clienteService.getClienteCorreo(parse).subscribe(dataA => {
            this.id = dataA.clienteId;

   this.fgv['clienteId'].setValue(dataA.clienteId);
   this.fgv['tipoDocumento'].setValue(dataA.tipoDocumento);
   this.fgv['nroDocumento'].setValue(dataA.nroDocumento);
   this.fgv['nombre'].setValue(dataA.nombre);
   this.fgv['apellido'].setValue(dataA.apellidos);
   this.fgv['telefono'].setValue(dataA.telefono);
   this.fgv['cargoProfesion'].setValue(dataA.profesionCargo);
   this.fgv['empresa'].setValue(dataA.nombreEmpresa);
   this.fgv['email'].setValue(dataA.login.correoElectronico);

   return dataA;
   
    }
  )
  }

   //toma datos del formulario y los modificar
     EditarCliente(){ 

    
      const allCliente: EditarCliente = {
      
       clienteId: this.id,
        tipoDocumento: this.fgValidator.get('tipoDocumento')?.value,
        nroDocumento: this.fgValidator.get('nroDocumento')?.value,
        nombre: this.fgValidator.get('nombre')?.value,
        apellidos: this.fgValidator.get('apellido')?.value,
        telefono: this.fgValidator.get('telefono')?.value,
        profesionCargo: this.fgValidator.get('cargoProfesion')?.value,
        nombreEmpresa: this.fgValidator.get('empresa')?.value,
        fotoPerfil: this.fgValidator.get('archivosubido')?.value,
    
       }
       console.log(this.id)
       this.clienteService.updateCliente(allCliente).subscribe(data => {
        alert('Cliente actualizado con éxito');
        this.fgValidator.reset();
      });
      
    }
    


  get fgv(){
    return this.fgValidator.controls;
  }

  goBack(): void {
    this.location.back();
   }
}
