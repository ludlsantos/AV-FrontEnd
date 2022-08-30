import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EstaLogueadoGuard } from 'src/app/estaLogueado.guard';
import { Login } from 'src/app/modelos/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.component.html',
  styleUrls: ['./cambiar-clave.component.css']
})
export class CambiarClaveComponent implements OnInit {

  validator!: FormGroup;
  correo:any;
  login?: Login;

  constructor(private fb: FormBuilder, private esta: EstaLogueadoGuard, loginService: LoginService, private route: Router, private cookieService: CookieService) { }

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
      var valorToken = this.cookieService.get('respuesta'); 
      const tokenInfo = this.esta.decofificarToken(valorToken);
      alert(tokenInfo.correoElectronico);

  }

}

