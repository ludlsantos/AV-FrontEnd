import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoReservaRoutingModule } from './listadoReserva-routing-module';
import { ListadoReservaComponent } from './listadoReserva.component';

@NgModule({
    declarations: [
        ListadoReservaComponent
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


