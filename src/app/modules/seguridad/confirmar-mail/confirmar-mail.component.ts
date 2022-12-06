import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-confirmar-mail',
  templateUrl: './confirmar-mail.component.html',
  styleUrls: ['./confirmar-mail.component.css']
})

@Injectable({
  providedIn:'root'
})

export class ConfirmarMailComponent implements OnInit {


  validator!: FormGroup;
  codigo: any;
  correo: any;

  constructor(
    private fb: FormBuilder, 
    private LoginService: LoginService, 
    private router:Router,
    private location: Location
    ) { }


  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.validator = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
    });
  }

  confirmarMail(){
    if(this.validator.invalid){
      alert('Datos invalidos, por favor verifique')
    }else{
      this.correo = this.validator.get('correo')?.value;
   this.LoginService.enviarCorreo(this.correo).subscribe(data => {
    if(data){
      this.codigo = data;
      alert('Revise su casilla de correo electrónico');
      this.router.navigate(['seguridad/ingresar-codigo'],{queryParams:{data:this.codigo, dato:this.correo}, skipLocationChange: true});

    }else{
      alert('Usted no tiene una cuenta asociada al correo electrónico ingresado');
      
    }
    })
  }
}

    get fgv(){
      return this.validator.controls;
    }
    
    goBack(): void {
      this.location.back();
     }

}
