import { Component } from '@angular/core';
import { JwtAuthService } from 'src/app/services/jwt-auth.service';
import { FiltroEventoPipe } from './pipes/filtro-evento.pipe';
import { FiltroReservaPipe } from './pipes/filtro-reserva.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  IsAuthenticated = false;
  title = 'AV-FrontEnd';

  constructor(public jwtAuthService: JwtAuthService) { }
  
  ngOnInit(): void {

  }

}
export {FiltroReservaPipe}
export {FiltroEventoPipe}

