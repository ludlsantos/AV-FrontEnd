import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reestablecer-clave',
  templateUrl: './reestablecer-clave.component.html',
  styleUrls: ['./reestablecer-clave.component.css']
})
export class ReestablecerClaveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cambiarPass(){
    return true;
  }


}
