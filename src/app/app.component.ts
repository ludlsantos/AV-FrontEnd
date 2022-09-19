import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { FiltroEventoPipe } from './pipes/filtro-evento.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  IsAuthenticated = false;
  title = 'AV-FrontEnd';

}
export{ FiltroEventoPipe }
