import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from 'src/app/modelos/login';
<<<<<<< Updated upstream
import { respuesta } from 'src/app/modelos/respuesta';
=======
import { response } from 'src/app/modelos/respuesta';
>>>>>>> Stashed changes
import { Token } from '@angular/compiler';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})

export class InicioSesionComponent implements OnInit {
  fomrLogin: FormGroup;
  subRef$!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private http:HttpClient,
    private router: Router
    
  ) { 
    this.fomrLogin = formBuilder.group( {
      rol: ['', Validators.required],
      contraseña: ['', Validators.required],
      correoElectronico: ['', Validators.required]
  

<<<<<<< Updated upstream
  constructor() { }
=======
>>>>>>> Stashed changes
    })
  }

  ngOnInit(): void {

  }

  Login() {
    const usuarioLogin: Login = {
      rol: this.fomrLogin.value.rol,
      contraseña: this.fomrLogin.value.contraseña,
      correoElectronico: this.fomrLogin.value.correoElectronico,
    };

<<<<<<< Updated upstream
    this.http.post<respuesta>('http://localhost:4000/api/identidad/login',
=======
    this.http.post<response>('http://localhost:4000/api/identidad/login',
>>>>>>> Stashed changes
    usuarioLogin, {observe: 'response'})
    .subscribe(res => {
      console.log('token', res.body?.respuesta);
      console.log('token', Token);
      sessionStorage.setItem('token', Token);
      this.router.navigate(['/home']);

    }, err => {
      console.log('Error en el login', err);
    });

  }

  ngOnDestroy() {
    if (this.subRef$) {
      this.subRef$.unsubscribe();
    }
  }



}
