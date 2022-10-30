import { Component, OnInit } from '@angular/core';
import { AdministradorService } from 'src/app/services/administrador.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { JwtAuthService } from 'src/app/services/jwt-auth.service';
import { localStorageJwt } from 'src/app/static/local-storage';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  correo = "";
  rol = "";
  eventos!: any;
 
  constructor(public jwtAuthService: JwtAuthService, private clienteService: ClienteService, private adminService: AdministradorService) {


    }

  ngOnInit(): void {
}

    recargar(): boolean{
      if(this.jwtAuthService.esAdmin()){
        this.rol = "Administrador"
        this.correo = JSON.parse(localStorage.getItem(localStorageJwt.LS_CORREO)!);
        return true;
      }else{
        if(this.jwtAuthService.esCliente()){
          this.rol = "Hola!"
          this.correo = JSON.parse(localStorage.getItem(localStorageJwt.LS_CORREO)!);
          return true;
        }else{
          this.rol = "Hola!"
          this.correo = "Usted se encuentra como invitado"
        }
      }
      return true;
    }
  }