import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoEventoRoutingModule } from './listadoEvento-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    ListadoEventoRoutingModule,
    RouterModule
  ]
})
export class ListadoEventoModule { }
