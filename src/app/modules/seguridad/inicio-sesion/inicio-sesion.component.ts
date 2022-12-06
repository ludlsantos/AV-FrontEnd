import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { JwtAuthService } from 'src/app/services/jwt-auth.service';
import { Login } from 'src/app/modelos/login';
import { Location } from '@angular/common';



@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit, OnDestroy {

  formLogin: FormGroup;
  subRef$!: Subscription;
  correo!: any;

  
  constructor(
    private formBuilder: FormBuilder,
    private http:HttpClient,
    private router: Router,
    private loginService: LoginService,
    private jwtAuthService: JwtAuthService,
    private location: Location
  ) { 
    
    this.formLogin = formBuilder.group( {
      email: ['', Validators.required],
      password: ['', Validators.required]


    });


    
  }


  ngOnInit() {
  }



    validarLogin (){
      this.correo = this.formLogin.value.email;

      var login = new Login ();
      login.correoElectronico = this.formLogin.value.email;
      login.contraseña= this.formLogin.value.password;
  

         
          this.loginService.obtenerToken(login).subscribe(res => {
            if(res == null){
              alert ('Usuario y/o contraseña incorrecta')
            }else{
            const token = res.respuesta|| '';
            console.log('token', token);
            sessionStorage.setItem('token', token);
            this.jwtAuthService.login(token);
            this.router.navigate(['/home']);
  
            }
  
      }, (error) => {
        var ER = error;
        alert ('Usuario y/o contraseña incorrecta')
      });
    
  }
  ngOnDestroy() {
    if (this.subRef$) {
      this.subRef$.unsubscribe();
    }
 
  }

    

goBack(): void {
  this.location.back();
 }


    
     

  }

 
  
  






