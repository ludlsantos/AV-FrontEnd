import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { JwtAuthService } from 'src/app/services/jwt-auth.service';
import { Login } from 'src/app/modelos/login';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
    /* private cookieService: CookieService, */
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

    

goBack(): void {
  this.location.back();
 }


    
     

  }

 
  
  






