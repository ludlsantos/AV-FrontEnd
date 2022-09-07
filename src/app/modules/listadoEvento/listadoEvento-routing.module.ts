import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoEventoComponent } from './listadoEvento/listadoEvento.component';

const routes: Routes = [
{
  path: 'listadoEvento',
  component: ListadoEventoComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoEventoRoutingModule { }
