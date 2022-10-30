import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignacionManualAsientosComponent } from '../asignacion-manual-asientos/asignacion-manual-asientos.component';
import { ListadoReservaComponent } from '../listadoReserva/listadoReserva.component';
import { AsientosAsignadosComponent } from './asientos-asignados/asientos-asignados.component';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';
import { EliminarEventoComponent } from './eliminar-evento/eliminar-evento.component';
import { EventosActivosComponent } from './eventos-activos/eventos-activos.component';
import { GestionarReservaComponent } from './gestionar-reserva/gestionar-reserva.component';
import { ListadoReservasActivasComponent } from './listado-reservas-activas/listado-reservas-activas.component';
import { ReservarComponent } from './reservar/reservar.component';

const routes: Routes = [
{
  path: 'crearEvento', 
  component: CrearEventoComponent
},

{
  path: 'editar-evento/:id', 
  component: EditarEventoComponent
},
{
  path: 'eliminar-evento/:id', 
component: EliminarEventoComponent
},
{
  path: 'eventos-activos', 
component: EventosActivosComponent
},
{
  path: 'editar-evento', 
component: EditarEventoComponent
},
{
  path: 'reservar/:id', 
  component: ReservarComponent
},
{
  path: 'reservar',
  component: ReservarComponent
},
{
  path: 'gestionar-reserva',
  component: GestionarReservaComponent
},
{
  path: 'gestionar-reserva/:id', 
 component: GestionarReservaComponent

},

{
  path: 'listadoReserva', 
  component: ListadoReservaComponent
},

{
  path: 'listadoReserva/:id', 
  component: ListadoReservaComponent
},

{
  path: 'listado-reservas-activas/:id', 
  component: ListadoReservasActivasComponent
},
{
  path: 'asignacion-manual-asientos/:id', 
  component: AsignacionManualAsientosComponent
},
{
  path: 'asientos-asignados/:id',
  component: AsientosAsignadosComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }
