import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login, Roles } from 'src/app/modelos/login';
import { respuesta } from 'src/app/modelos/respuesta';
import { Token } from '@angular/compiler';
import { Subscription } from 'rxjs';
import { IdentidadService } from 'src/app/services/identidad.service';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { LoginService } from 'src/app/services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { EstaLogueadoGuard } from 'src/app/Guards/estaLogueado.guard';
import jwt_decode from 'jwt-decode';
import { JwtAuthService } from 'src/app/services/jwt-auth.service';
import { localStorageJwt } from 'src/app/static/local-storage';
import jwtDecode from 'jwt-decode';
import { IJwt } from 'src/app/modelos/jwt';


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
    /* private cookieService: CookieService, */
    private jwtAuthService: JwtAuthService
    
  ) { 
    this.formLogin = formBuilder.group( {
      //rol: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
/*       emailAdmin: ['', Validators.required],
      passwordAdmin: ['', Validators.required]  */

    });


    
  }


  ngOnInit() {
    
  }


/*   Login() {
    const usuarioLogin: Login = {
    rol: 'Administrador' || 'Cliente',
    correoElectronico: this.formLogin.value.email,
    contraseña:this.formLogin.value.password,
    
    };
 */
    
/*     validarLogin (){
    this.correo = this.formLogin.value.email;

    this.loginService.getLogin(this.correo).subscribe(data => {

      if(data && data.contraseña == this.formLogin.value.password) {
       
        this.loginService.obtenerToken(data).subscribe(res => {
          const token = res.respuesta|| '';
          console.log('token', token);
          sessionStorage.setItem('token', token);
          this.jwtAuthService.login(token);
          this.router.navigate(['/home']);
          this.cookieService.set('respuesta', res.respuesta, 1, '/')

          
        })


        
      }
      else  {
        alert('Error en el login')
        

  
        
      } 


    }), (error) => {
      var ER = error;
      alert ('Error en el login')
    }; */ 



    validarLogin (){
      this.correo = this.formLogin.value.email;

      var login = new Login ();
      login.correoElectronico = this.formLogin.value.email;
      login.contraseña= this.formLogin.value.password;
      //login.rol = "test";
  

         
          this.loginService.obtenerToken(login).subscribe(res => {
            const token = res.respuesta|| '';
            console.log('token', token);
            sessionStorage.setItem('token', token);
            this.jwtAuthService.login(token);
            this.router.navigate(['/home']);
            /* this.cookieService.set('respuesta', res.respuesta, 1, '/') */
  
            
  
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

    



    
     

  }

 
  
  






