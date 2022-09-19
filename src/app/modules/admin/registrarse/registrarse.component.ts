import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Administrador } from 'src/app/modelos/administrador';
import { Login } from 'src/app/modelos/login';
import { AdministradorService } from 'src/app/services/administrador.service';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})

export class RegistrarseComponent implements OnInit {

  fgValidator!: FormGroup;
  correoElectronico!: string;

  constructor(private http: HttpClient ,private fb: FormBuilder, private route: Router,private AdminService: AdministradorService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.fgValidator = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rePassword: ['', [Validators.required]]
   });
  }

     AdminRegistro() {
      if (this.fgValidator.get('password')?.value == this.fgValidator.get('rePassword')?.value){

        if (this.fgValidator.invalid){
          alert('Datos invalidos, porfavor verifique')
        }else{
          var loginHijo: Login = {
            rol: "Administrador",
            contraseña: this.fgValidator.get('password')?.value,
            correoElectronico: this.fgValidator.get('email')?.value
          }

          const administrador : Administrador = {
            nombreEmpresa: this.fgValidator.get('nombre')?.value,
            login: loginHijo
          }
          this.AdminService.guardarAdmin(administrador).subscribe(data => {
            alert('Registrado correctamente');
            this.route.navigate(['/login'])
            this.fgValidator.reset();
          });
  }
      }else{
        alert('Las contraseñas no coinciden');
      }
    }

  get fgv(){
    return this.fgValidator.controls;
  }

}
