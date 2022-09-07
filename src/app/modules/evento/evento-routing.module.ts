import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';

const routes: Routes = [
{path: 'crearEvento', component: CrearEventoComponent},

{path: 'editar-evento/:id', component: EditarEventoComponent},
{path: 'editar-evento', component: EditarEventoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }
