import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsClienteGuard } from 'src/app/Guards/es-cliente.guard';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';

const routes: Routes = [
{
  path: 'editar-cliente',
  component: EditarClienteComponent,
  canActivate: [EsClienteGuard]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteModRoutingModule { }
