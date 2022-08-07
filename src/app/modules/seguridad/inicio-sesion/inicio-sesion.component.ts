import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from 'src/app/modelos/login';
import { respuesta } from 'src/app/modelos/respuesta';
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


  ngOnInit(): void {

  }

  })

  Login(): void {
    const usuarioLogin: Login = {
      rol: this.fomrLogin.value.rol,
      contraseña: this.fomrLogin.value.contraseña,
      correoElectronico: this.fomrLogin.value.correoElectronico,
    };


    this.http.post<respuesta>('http://localhost:4200/api/identidad/login',

    usuarioLogin, {observe: 'respuesta'})
    .subscribe(res => {
      console.log('token',res.body.respuesta);
      console.log('token', Token);
      sessionStorage.setItem('token', Token);
      this.router.navigate(['/home']);

    }, err => {
      console.log('Error en el login', err)
    });

  }

  ngOnDestroy() {
    if (this.subRef$) {
      this.subRef$.unsubscribe();
    }
 
      }

