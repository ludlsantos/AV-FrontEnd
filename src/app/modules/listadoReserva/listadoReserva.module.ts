import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoReservaRoutingModule } from './listadoReserva-routing-module';
import { ListadoReservaComponent } from './listadoReserva.component';
import { FiltroReservaPipe } from 'src/app/pipes/filtro-reserva.pipe';

@NgModule({
    declarations: [
        ListadoReservaComponent,
        FiltroReservaPipe,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
       ListadoReservaRoutingModule
    ]
})
export class ListadoReservaModule {}


