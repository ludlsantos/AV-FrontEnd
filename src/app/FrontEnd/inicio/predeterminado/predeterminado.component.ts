import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/modelos/evento';

@Component({
  selector: 'app-predeterminado',
  templateUrl: './predeterminado.component.html',
  styleUrls: ['./predeterminado.component.css']
})
export class PredeterminadoComponent implements OnInit {

  evento:Evento = new Evento();
  
  constructor() { }

  ngOnInit(): void {

   var ruta =  "http://montevideoit-001-site5.htempurl.com/img/" 
  }

  

}
