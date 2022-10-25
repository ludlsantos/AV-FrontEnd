import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/modelos/login';
import { JwtAuthService } from 'src/app/services/jwt-auth.service';
import { LoginService } from 'src/app/services/login.service';
import { localStorageJwt } from 'src/app/static/local-storage';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.component.html',
  styleUrls: ['./cambiar-clave.component.css']
})
export class CambiarClaveComponent implements OnInit {

  validator!: FormGroup;
  correo:any;
  passAnterior: any;
  passNueva: any;
  correoParseado: any;
  login?: Login;

  constructor(
    private fb: FormBuilder, 
    private loginService: LoginService, 
    private route: Router, 
    private jwtAuthService: JwtAuthService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.validator = this.fb.group({
      passAnterior: ['', [Validators.required]],
      passNueva: ['', [Validators.required]]
    })
  }

  cambiarPass(){
    this.passAnterior= this.validator.get('passAnterior')?.value;
    this.passNueva= this.validator.get('passNueva')?.value;
    this.correo = localStorage.getItem(localStorageJwt.LS_CORREO)!;
    const parse = JSON.parse(this.correo)
    this.loginService.getLoginYPass(parse, this.passAnterior).subscribe(data => { 
        const loginNuevo: Login = {
          rol: data.rol,
          contraseña: this.passNueva,
          correoElectronico: data.correoElectronico
        }
        this.loginService.cambiarClave(data.correoElectronico, loginNuevo).subscribe(dataA =>{
          alert('La contraseña fué cambiada con éxito');
          this.route.navigate(['/home'])
            this.validator.reset();
        });
    });


  }
  goBack(): void {
    this.location.back();
   }

}

