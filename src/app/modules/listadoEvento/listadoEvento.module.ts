import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoEventoRoutingModule } from './listadoEvento-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListadoEventoComponent } from './listadoEvento/listadoEvento.component';
import { FiltroEventoPipe } from 'src/app/app.component';



@NgModule({
  declarations: [

    ListadoEventoComponent,
    FiltroEventoPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ListadoEventoRoutingModule
    
  ]
})
export class ListadoEventoModule { }

