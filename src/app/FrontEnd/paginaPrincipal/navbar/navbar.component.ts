import { Component, OnInit } from '@angular/core';

import { JwtAuthService } from 'src/app/services/jwt-auth.service';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  constructor(public jwtAuthService: JwtAuthService,
    private reservaService: ReservaService) { }

  ngOnInit(): void {

  }

  onLogout(): void{
    this.jwtAuthService.cerrarSesion();

}
generarQR(){
  this.reservaService.getGenerarQR(2).subscribe(data => {
    alert("QR Generado")
  });
}

}
