import { Component, OnInit } from '@angular/core';
import { Mesa } from 'src/app/modelos/mesa';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {

    
  mesas: Mesa[] = [];

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar() {

    this.eventoService.arregloMesas(1).subscribe(data => {
    this.mesas = data;
    console.log(data);
   
 

 });
}



}
