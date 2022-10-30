import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CancelarReservaComponent } from './cancelar-reserva/cancelar-reserva.component';
import { EliminarCuentaComponent } from './eliminar-cuenta/eliminar-cuenta.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ReservasClienteComponent } from './reservas-cliente/reservas-cliente.component';


const routes: Routes = [
{
  path: 'registrarse',

  component: RegistrarseComponent,


},
{
  path: 'eliminarCuenta',
  component: EliminarCuentaComponent

},
{
  path: 'reservas-cliente',
  component: ReservasClienteComponent
},
{
  path: 'cancelarReserva/:id',
  component: CancelarReservaComponent
},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
