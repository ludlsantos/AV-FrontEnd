import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';
import { EliminarEventoComponent } from './eliminar-evento/eliminar-evento.component';
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
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }
