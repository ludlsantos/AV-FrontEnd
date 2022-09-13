import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { EventoRoutingModule } from './evento-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';

@NgModule({
  declarations: [
    CrearEventoComponent,
    EditarEventoComponent
  ],
  imports: [
    CommonModule,
    EventoRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class EventoModule { }
