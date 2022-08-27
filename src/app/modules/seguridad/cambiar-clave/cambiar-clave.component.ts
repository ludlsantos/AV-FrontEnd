import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, private loginService: LoginService, private route: Router) { }

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
    return true;
  }

}
