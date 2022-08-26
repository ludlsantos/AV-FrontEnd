import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from 'src/app/modelos/login';
import { respuesta } from 'src/app/modelos/respuesta';
import { Token } from '@angular/compiler';
import { Subscription } from 'rxjs';
import { IdentidadService } from 'src/app/services/identidad.service';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit, OnDestroy {

  formLogin: FormGroup;
  subRef$!: Subscription;


  constructor(
    private formBuilder: FormBuilder,
    private http:HttpClient,
    private router: Router,
    private loginService: LoginService
    
  ) { 
    this.formLogin = formBuilder.group( {
      rol: ['', Validators.required],
      emailCliente: ['', Validators.required],
      passwordCliente: ['', Validators.required],
       emailAdmin: ['', Validators.required],
      passwordAdmin: ['', Validators.required] 

    });


    
  }


  ngOnInit() {
    
  }


  Login() {
    const usuarioLogin: Login = {
    rol: 'Cliente',
    correoElectronico: this.formLogin.value.emailCliente,
    contraseña:this.formLogin.value.passwordCliente,
    
    };
    const adminLogin: Login = {
    rol: 'Administrador',
    correoElectronico: this.formLogin.value.emailAdmin,
    contraseña:this.formLogin.value.passwordAdmin,


    }
    alert ('Funciona 1')
  





    //this.subRef$ = this.http.post<respuesta>('https://localhost:44319/api_1_0/Identidades/login',
    this.loginService.obtenerToken(usuarioLogin).subscribe(res => {
      const token = res.respuesta|| '';
      console.log('token', token);
      sessionStorage.setItem('token', token);
      this.router.navigate(['/home']);
      alert ('Funciona')
      
    }, err => {
      alert('Error en el login' + err);
    });


      this.loginService.obtenerToken(adminLogin).subscribe(res => {
      const token = res.respuesta|| '';
      console.log('token', token);
      sessionStorage.setItem('token', token);
      this.router.navigate(['/home']);
      alert ('Funciona')
      
    }, err => {
      alert('Error en el login' + err);
    }); 



    /* usuarioLogin, {observe: 'response'})
    .subscribe(res => {
      const token = res.body?.respuesta || '';
      console.log('token', token);
      sessionStorage.setItem('token', token);
      this.router.navigate(['/home']);
      alert ('Funciona')

    }, err => {
      alert('Error en el login' + err);
    });
     */

  }


  ngOnDestroy() {
    if (this.subRef$) {
      this.subRef$.unsubscribe();
    }
 
  }

}
