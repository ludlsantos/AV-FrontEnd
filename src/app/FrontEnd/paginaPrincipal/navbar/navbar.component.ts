import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from 'src/app/services/jwt-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(

    private jwtAuthServices: JwtAuthService
  ) { }

  ngOnInit(): void {
  }

  onLogout(): void{
    this.jwtAuthServices.cerrarSesion();

}
}
