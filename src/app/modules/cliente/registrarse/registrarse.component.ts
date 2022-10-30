import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/modelos/cliente';
import { Login } from 'src/app/modelos/login';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})

export class RegistrarseComponent implements OnInit {

  correoElectronico!: string;
  fgValidator!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private route: Router,
    private clienteService: ClienteService, 
    private location: Location
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.fgValidator = this.fb.group({
      tipoDocumento: ['', [Validators.required]],
      nroDocumento: ['', [Validators.required, Validators.minLength(7)]],
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      telefono: ['', [Validators.required, Validators.minLength(8)]],
      cargoProfesion: ['', [Validators.required]],
      idiomaPreferencia: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rePassword: ['', [Validators.required]],
      archivosubido: ['', [Validators.nullValidator]],
     });
  }


  ClienteRegistro(){
    if (this.fgValidator.get('password')?.value == this.fgValidator.get('rePassword')?.value){

    if (this.fgValidator.invalid){
      alert('Datos invalidos, porfavor verifique')
    }else{
      
      var loginHijo: Login = {
        rol: "Cliente",
        contraseña: this.fgValidator.get('password')?.value,
        correoElectronico: this.fgValidator.get('email')?.value
    }
  
          const cliente: Cliente = {
            tipoDocumento: this.fgValidator.get('tipoDocumento')?.value,
            nroDocumento: this.fgValidator.get('nroDocumento')?.value,
            nombre: this.fgValidator.get('nombre')?.value,
            apellidos: this.fgValidator.get('apellido')?.value,
            telefono: this.fgValidator.get('telefono')?.value,
            profesionCargo: this.fgValidator.get('cargoProfesion')?.value,
            nombreEmpresa: this.fgValidator.get('empresa')?.value,
            idiomaPreferencia: this.fgValidator.get('idiomaPreferencia')?.value,
            login: loginHijo
          }
            this.clienteService.guardarCliente(cliente).subscribe(data => {
              if(data){
              alert('Registrado con éxito');
              this.route.navigate(['/login']);
              this.fgValidator.reset();  
              }else{
                alert("Ocurrió un error, intente nuevamente");
                this.route.navigate(['/home'])
                this.fgValidator.reset();
              }
            });
  
  }
     }else{
        alert('Las contraseñas no coinciden');
  }
}

  get fgv(){
    return this.fgValidator.controls;
  }
  goBack(): void {
    this.location.back();
   }
}
