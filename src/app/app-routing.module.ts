import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredeterminadoComponent } from './FrontEnd/inicio/predeterminado/predeterminado.component';
import { ClienteModule } from './modules/cliente/cliente.module';
import { EventoModule } from './modules/evento/evento.module';

import { AdminModule } from './modules/admin/admin.module';

import { InicioSesionComponent } from './modules/seguridad/inicio-sesion/inicio-sesion.component';

import { SeguridadModule } from './modules/seguridad/seguridad.module';
import { EstaLogueadoGuard } from './Guards/estaLogueado.guard';
import { EsAdminGuard } from './Guards/es-admin.guard';


const routes: Routes = [

{path: '',redirectTo: '/login', pathMatch: 'full'},
{path: 'login', component: InicioSesionComponent},

{
path: 'home',
component: PredeterminadoComponent,
canActivate: [EstaLogueadoGuard]
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
path: 'admin',
  loadChildren: () => import('./modules/admin/admin.module').then(m => AdminModule)
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
