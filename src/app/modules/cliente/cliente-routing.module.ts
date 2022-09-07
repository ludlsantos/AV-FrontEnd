import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsAdminGuard } from 'src/app/Guards/es-admin.guard';
import { EliminarCuentaComponent } from './eliminar-cuenta/eliminar-cuenta.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

const routes: Routes = [
{
  path: 'registrarse',
  component: RegistrarseComponent
},
{
  path: 'eliminarCuenta',
  component: EliminarCuentaComponent
  //canActivate: [EsAdminGuard]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
