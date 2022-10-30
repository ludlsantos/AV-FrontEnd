import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditarCliente } from 'src/app/modelos/editarCliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { LoginService } from 'src/app/services/login.service';
import { localStorageJwt } from 'src/app/static/local-storage';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {


  fgValidator!: FormGroup;
  correo!:string;
  id!: any;
  correoElectronico!: string;
  constructor(
    private fb: FormBuilder, private clienteService: ClienteService, private route: Router) {
   
    }


  ngOnInit(): void {
    
    this.FormBuilding();
    this.getDataOfRecord();
     
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
      idioma: [''],
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
      
       this.clienteService.updateCliente(allCliente).subscribe(data => {
        if(data){
        alert('Cliente actualizado con éxito');
        this.fgValidator.reset();
        }else{
        alert("Ocurrió un error, intente nuevamente");
        this.route.navigate(['/home'])
        this.fgValidator.reset();
        }
      });
      
    }
    


  get fgv(){
    return this.fgValidator.controls;
  }

}