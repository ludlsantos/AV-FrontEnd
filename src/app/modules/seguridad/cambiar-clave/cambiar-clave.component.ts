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
    if(this.passAnterior && this.passNueva != null){
      if (this.validator.invalid){
        alert('Datos invalidos, por favor verifique')
      }else{
    this.loginService.getLoginYPass(parse, this.passAnterior).subscribe(data => { 
      if(data!=null){
        const loginNuevo: Login = {
          rol: data.rol,
          contraseña: this.passNueva,
          correoElectronico: data.correoElectronico
        }
        this.loginService.cambiarClave(data.correoElectronico, loginNuevo).subscribe(dataA =>{
          if(dataA != null){
          alert('La contraseña fué cambiada con éxito');
          this.route.navigate(['/home'])
            this.validator.reset();
          }else{
            alert("Ocurrió un error, intente nuevamente");
            this.route.navigate(['/home'])
            this.validator.reset();
          }
        });
      }else{
          alert("Su contraseña no coincide");
          this.route.navigate(['/home'])
          this.validator.reset();
        }
    });
  }
  }else{
    alert("Por favor, complete los campos")
  }
  }
  goBack(): void {
    this.location.back();
   }

}

