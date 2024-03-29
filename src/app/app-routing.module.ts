
import { NgModule } from '@angular/core';
import { PredeterminadoComponent } from './FrontEnd/inicio/predeterminado/predeterminado.component';
import { ClienteModule } from './modules/cliente/cliente.module';
import { EventoModule } from './modules/evento/evento.module';

import { AdminModule } from './modules/admin/admin.module';

import { InicioSesionComponent } from './modules/seguridad/inicio-sesion/inicio-sesion.component';

import { SeguridadModule } from './modules/seguridad/seguridad.module';
import { EstaLogueadoGuard } from './Guards/estaLogueado.guard';
import { EsAdminGuard } from './Guards/es-admin.guard';
import { SeccionesHomeComponent } from './secciones-home/secciones-home.component';
import { ClienteModModule } from './modules/editar-cliente/clienteMod.module';
import { ListadoEventoModule } from './modules/listadoEvento/listadoEvento.module';
import { ListadoReservaModule } from './modules/listadoReserva/listadoReserva.module';

import { ComprobanteDePagoComponent } from './modules/comprobanteDePago/comprobanteDePago.component';
import { RouterModule, Routes } from '@angular/router';
import { AsignacionManualAsientosComponent } from './modules/asignacion-manual-asientos/asignacion-manual-asientos.component';


const routes: Routes = [


{path: 'login', component: InicioSesionComponent},

{path: 'comprobanteDePago/:id', component: ComprobanteDePagoComponent},

{path: 'asignacionManualAsientos/:id', component: AsignacionManualAsientosComponent},

{path: '',redirectTo: 'home', pathMatch: 'full'},
{path: 'seguridad/iniciarSesion', component: InicioSesionComponent},


//{path: 'login',redirectTo: '/login', pathMatch: 'full'},
//{path: 'login', component: InicioSesionComponent},

{
path: 'home',
component: PredeterminadoComponent,
/* canActivate: [EsAdminGuard] */
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
  path: 'listadoEvento',
  loadChildren: () => import('./modules/listadoEvento/listadoEvento.module').then(m => ListadoEventoModule)
},
{
  path: 'editar-cliente',
  loadChildren: () => import('./modules/editar-cliente/clienteMod.module').then(m => ClienteModModule)
},

{
  path: 'listadoEvento',
  loadChildren: () => import('./modules/listadoEvento/listadoEvento.module').then(m => ListadoEventoModule)
},
{
  path: 'listadoReserva',
  loadChildren: () => import('./modules/listadoReserva/listadoReserva.module').then(m => ListadoReservaModule)
},



{path: '',redirectTo: '/login', pathMatch: 'full'},

{
  path: '**',
  redirectTo: '/home'
},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
