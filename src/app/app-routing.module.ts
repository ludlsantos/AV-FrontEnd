import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredeterminadoComponent } from './FrontEnd/inicio/predeterminado/predeterminado.component';
import { ClienteModule } from './modules/cliente/cliente.module';
import { InicioSesionComponent } from './modules/seguridad/inicio-sesion/inicio-sesion.component';
import { SeguridadModule } from './modules/seguridad/seguridad.module';

const routes: Routes = [
<<<<<<< Updated upstream
{path: '',redirectTo: '/login', pathMatch: 'full'},
{path: 'login', component: InicioSesionComponent},

=======
{path: '',redirectTo: '/login', pathMatch: 'full',},
{path: 'login', component: InicioSesionComponent},


>>>>>>> Stashed changes
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
  path: '**',
  redirectTo: '/home'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
