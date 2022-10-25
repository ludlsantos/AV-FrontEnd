import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoReservasActivasComponent } from '../evento/listado-reservas-activas/listado-reservas-activas.component';
import { ListadoEventoComponent } from './listadoEvento/listadoEvento.component';



const routes: Routes = [
{
  path: 'listadoEvento',
  component: ListadoEventoComponent
},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoEventoRoutingModule { }
