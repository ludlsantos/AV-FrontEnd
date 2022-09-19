import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteModRoutingModule } from './clienteMod-routing.module';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EditarClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteModRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ClienteModModule { }
