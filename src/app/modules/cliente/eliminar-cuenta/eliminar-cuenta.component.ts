import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { LoginService } from 'src/app/services/login.service';
import { localStorageJwt } from 'src/app/static/local-storage';
import { Location } from '@angular/common';


@Component({
  selector: 'app-eliminar-cuenta',
  templateUrl: './eliminar-cuenta.component.html',
  styleUrls: ['./eliminar-cuenta.component.css']
})
export class EliminarCuentaComponent implements OnInit {
  
  validator!: FormGroup;
  pass!: any;
  rePass!: any;
  correo!: any;
  id!: any;

  constructor(
    private fb: FormBuilder, 
    private LoginService: LoginService, 
    private clienteService: ClienteService, 
    private route: Router,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.validator = this.fb.group({
      pass: ['', [Validators.required]], 
      rePass:['', [Validators.required]]
    })
  }

  eliminarCuenta(){
    this.pass = this.validator.get('pass')?.value;
    this.rePass = this.validator.get('rePass')?.value;
    this.correo = localStorage.getItem(localStorageJwt.LS_CORREO)!;
    const parse = JSON.parse(this.correo)
    if(this.pass == this.rePass){ 
      if (this.validator.invalid){
        alert('Datos invalidos, porfavor verifique')
      }else{
        this.clienteService.getClienteCorreoyPass(parse, this.pass).subscribe(dataA => {
          if(dataA){
          this.id = dataA.clienteId;
          var mensaje = confirm("¿Seguro que desea eliminar su cuenta de forma definitiva?");
          if (mensaje) {
            this.clienteService.eliminarCliente(this.id).subscribe(dataB => {
              if(dataB){
                this.LoginService.eliminarLogin(dataA.login.correoElectronico, this.pass).subscribe(dataC =>{
                  if(dataC == null){
                    alert("Ocurrió un error, intente nuevamente");
                    this.route.navigate(['/home'])
                    this.validator.reset();
                  
                  }else{
                    localStorage.removeItem(localStorageJwt.LS_ACCESS_TOKEN);
                  localStorage.removeItem(localStorageJwt.LS_ROLES);
                  localStorage.removeItem(localStorageJwt.LS_CORREO);
                  alert("Se eliminó su cuenta correctamente");
                  }
              });
                this.route.navigate(['/home'])
            }else{
              alert("Ocurrió un error, intente nuevamente");
              this.route.navigate(['/home'])
              this.validator.reset();
            }
              });
      
          }
      else {
        this.route.navigate(['/home'])
      }
    }
    alert("Ocurrió un error, intente nuevamente");
    this.route.navigate(['/home'])
    this.validator.reset();
        })
      }
    }else {
      alert("Las contraseñas no coinciden")
    }
    
  }
  
goBack(): void {
  this.location.back();
 }
}
