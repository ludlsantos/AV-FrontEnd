import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredeterminadoComponent } from './FrontEnd/inicio/predeterminado/predeterminado.component';
import { ClienteModule } from './modules/cliente/cliente.module';
import { EventoModule } from './modules/evento/evento.module';
import { SeguridadModule } from './modules/seguridad/seguridad.module';

const routes: Routes = [
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},
{
path: 'home',
component: PredeterminadoComponent
},
{
  path: 'seguridad',
  loadChildren: () => import('./modules/seguridad/seguridad.module').then(m => SeguridadModule)
},

{
  path: 'cliente',
  loadChildren: () => import('./modules/cliente/cliente.module').then(m => ClienteModule)
},

{
  path: 'evento',
  loadChildren: () => import('./modules/evento/evento.module').then(m => EventoModule)
},

{
  path: '**',
  redirectTo: '/home'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
