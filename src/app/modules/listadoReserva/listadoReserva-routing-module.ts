import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoReservaComponent } from './listadoReserva.component';


const routes: Routes = [
{
    path: 'listadoReserva/:id', 
    component: ListadoReservaComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoReservaRoutingModule{ }
