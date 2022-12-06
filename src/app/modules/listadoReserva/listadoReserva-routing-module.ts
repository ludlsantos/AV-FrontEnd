import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsAdminGuard } from 'src/app/Guards/es-admin.guard';
import { ListadoReservaComponent } from './listadoReserva.component';


const routes: Routes = [
{
    path: 'listadoReserva/:id', 
    component: ListadoReservaComponent,
    canActivate: [EsAdminGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoReservaRoutingModule{ }
