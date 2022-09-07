import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoEventoRoutingModule } from './listadoEvento-routing.module';
import { ListadoEventoComponent } from './listadoEvento/listadoEvento.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListadoEventoComponent
  ],
  imports: [
    CommonModule,
    
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    ListadoEventoRoutingModule
  ]
})
export class ListadoEventoModule { }
