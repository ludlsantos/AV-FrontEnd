import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente';
import { Login } from 'src/app/modelos/login';
import { ClienteService } from 'src/app/services/cliente.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  fgValidator!: FormGroup;

  clienteId: String;
  constructor(
    private fb: FormBuilder, 
    private clienteService: ClienteService,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute) {
      this.clienteId = this.route.snapshot.params["clienteId"];
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
     });  
  }


  getDataOfRecord(){
   if (this.fgValidator.get('clienteId')?.value){
  this.clienteService.getRecordById(this.fgValidator.get('clienteId')?.value).subscribe(
    data =>{
   this.fgv['clienteId'].setValue(data.clienteId);
   this.fgv['tipoDocumento'].setValue(data.tipoDocumento);
   this.fgv['nroDocumento'].setValue(data.nroDocumento);
   this.fgv['nombre'].setValue(data.nombre);
   this.fgv['apellido'].setValue(data.apellidos);
   this.fgv['telefono'].setValue(data.telefono);
   this.fgv['cargoProfesion'].setValue(data.profesionCargo);
   this.fgv['empresa'].setValue(data.nombreEmpresa);

   return data;
   
    }
  )
}
  }
 
   //toma datos del formulario y los modificar
     EditarCliente(){
    if (this.fgValidator.get('clienteId')?.value){

    if (this.fgValidator.invalid){
      alert("Datos invalidos, porfavor verifique");
    }else{
      const cliente: Cliente = {
        tipoDocumento: this.fgValidator.get('tipoDocumento')?.value,
        nroDocumento: this.fgValidator.get('nroDocumento')?.value,
        nombre: this.fgValidator.get('nombre')?.value,
        apellidos: this.fgValidator.get('apellido')?.value,
        telefono: this.fgValidator.get('telefono')?.value,
        profesionCargo: this.fgValidator.get('cargoProfesion')?.value,
        nombreEmpresa: this.fgValidator.get('empresa')?.value,
        fotoPerfil: this.fgValidator.get('archivosubido')?.value,
        login: this.fgValidator.get('login')?.value,
     
       }

       
  

       const login: Login = {
        rol: "Cliente",
        contraseña: this.fgValidator.get('password')?.value,
        correoElectronico: this.fgValidator.get('email')?.value

    }

      this.clienteService.guardarCliente(cliente).subscribe(data => {
        alert('Guardado exitosamente');
        this.fgValidator.reset();
      
      
 
        alert('Aca');
      this.loginService.guardarLogin(login).subscribe(data =>{
        alert('Login creado exitosamente');
        this.fgValidator.reset();
      })
      })
    }
  }else{
    alert('Las contraseñas no coinciden');
  }
  }

  get fgv(){
    return this.fgValidator.controls;
  }

}
