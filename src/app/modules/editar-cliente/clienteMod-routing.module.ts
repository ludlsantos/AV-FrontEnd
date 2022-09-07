import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';

const routes: Routes = [
{
  path: 'editar-cliente',
  component: EditarClienteComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteModRoutingModule { }
