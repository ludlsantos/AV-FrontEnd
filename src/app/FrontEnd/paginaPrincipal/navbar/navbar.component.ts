import { Component, OnInit } from '@angular/core';

import { JwtAuthService } from 'src/app/services/jwt-auth.service';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  constructor(public jwtAuthService: JwtAuthService,) { }

  ngOnInit(): void {

  }

  onLogout(): void{
    this.jwtAuthService.cerrarSesion();

}


}
