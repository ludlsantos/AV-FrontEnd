import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoEventoRoutingModule } from './listadoEvento-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FiltroEventoPipe } from 'src/app/pipes/filtro-evento.pipe';
import { RouterModule } from '@angular/router';
import { ListadoEventoComponent } from './listadoEvento/listadoEvento.component';



@NgModule({
  declarations: [

    FiltroEventoPipe,
    ListadoEventoComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    ListadoEventoRoutingModule,
   
    
  ]
})
export class ListadoEventoModule { }

