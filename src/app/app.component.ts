import { Component } from '@angular/core';

import { Pipe, PipeTransform } from '@angular/core';
import { FiltroEventoPipe } from './pipes/filtro-evento.pipe';

import { JwtAuthService } from 'src/app/services/jwt-auth.service';


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
export{ FiltroEventoPipe }
