import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare const mostrarMensaje: any;

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})

export class RegistrarseComponent implements OnInit {

  fgValidator!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.fgValidator = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rePassword: ['', [Validators.required]]
   });
  }

  //ClienteRegistro()
     AdminRegistro() {
    if (this.fgValidator.invalid){
      mostrarMensaje("Datos invalidos, porfavor verifique");
    }else{
      mostrarMensaje("Registrando....");
    }
  }

  get fgv(){
    return this.fgValidator.controls;
  }

}
