import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ConfirmarMailComponent } from '../confirmar-mail/confirmar-mail.component';

@Component({
  selector: 'app-ingresar-codigo',
  templateUrl: './ingresar-codigo.component.html',
  styleUrls: ['./ingresar-codigo.component.css']
})
export class IngresarCodigoComponent implements OnInit {

  validator!: FormGroup;
  codigo: any;
  correo: any;

  constructor(
    private fb: FormBuilder, 
    private router:Router,  
    private route:ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.route.queryParams.subscribe((params: any) =>{
      this.codigo = params.data
      this.correo = params.dato
    });
  }

  FormBuilding(){
    this.validator = this.fb.group({
      codigo: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  confirmarCodigo(){
    if(this.validator.get('codigo')?.value == this.codigo) {
      this.router.navigate(['seguridad/reestablecerClave'] , {queryParams:{dato:this.correo}, skipLocationChange: true});

    }else{
      alert("Código incorrecto, reintente")
    }
  }
  goBack(): void {
    this.location.back();
   }
}
