import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsAdminGuard } from 'src/app/Guards/es-admin.guard';
import { EsClienteGuard } from 'src/app/Guards/es-cliente.guard';
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
  component: CrearEventoComponent,
  canActivate: [EsAdminGuard]
},

{
  path: 'editar-evento/:id', 
  component: EditarEventoComponent,
  canActivate: [EsAdminGuard]
},
{
  path: 'eliminar-evento/:id', 
component: EliminarEventoComponent,
canActivate: [EsAdminGuard]
},
{
  path: 'eventos-activos', 
component: EventosActivosComponent
},

{
  path: 'reservar/:id', 
  component: ReservarComponent,
  canActivate: [EsClienteGuard]
},
{
  path: 'gestionar-reserva/:id', 
 component: GestionarReservaComponent,
 canActivate: [EsAdminGuard]

},

{
  path: 'listadoReserva', 
  component: ListadoReservaComponent,
  canActivate: [EsAdminGuard]
},

{
  path: 'listadoReserva/:id', 
  component: ListadoReservaComponent,
  canActivate: [EsAdminGuard]
},

{
  path: 'listado-reservas-activas/:id', 
  component: ListadoReservasActivasComponent,
  canActivate: [EsAdminGuard]
},
{
  path: 'asignacion-manual-asientos/:id', 
  component: AsignacionManualAsientosComponent,
  canActivate: [EsAdminGuard]
},
{
  path: 'asientos-asignados/:id',
  component: AsientosAsignadosComponent,
  canActivate: [EsAdminGuard]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }
