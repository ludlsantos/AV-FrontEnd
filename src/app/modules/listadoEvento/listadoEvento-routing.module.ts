import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsAdminGuard } from 'src/app/Guards/es-admin.guard';
import { ListadoReservasActivasComponent } from '../evento/listado-reservas-activas/listado-reservas-activas.component';
import { ListadoEventoComponent } from './listadoEvento/listadoEvento.component';



const routes: Routes = [
{
  path: 'listadoEvento',
  component: ListadoEventoComponent,
  canActivate: [EsAdminGuard]
},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoEventoRoutingModule { }
