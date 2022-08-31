import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { LoginService } from 'src/app/services/login.service';
import { localStorageJwt } from 'src/app/static/local-storage';


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

  constructor(private fb: FormBuilder, private LoginService: LoginService, private clienteService: ClienteService, private router:ActivatedRoute, private route: Router) { }

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
      this.LoginService.getLogin(parse).subscribe(data => { 
        this.clienteService.getClienteCorreo(data.correoElectronico).subscribe(dataA => {
          this.id = dataA.clienteId;
          var mensaje = confirm("¿Seguro que desea eliminar su cuenta de forma definitiva?");
          if (mensaje) {
            this.clienteService.eliminarCliente(this.id).subscribe(dataB => {
              this.LoginService.eliminarLogin(data.correoElectronico).subscribe(dataC =>{
                alert("Se eliminó su cuenta correctamente");
                this.route.navigate(['/home'])
              });
            });
      
          }
      else {
        this.route.navigate(['/home'])
      }
        })
    
      });
    }else {
      alert("Las contraseñas no coinciden")
    }
    
  }
}
