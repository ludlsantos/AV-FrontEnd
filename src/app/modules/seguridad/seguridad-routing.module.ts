import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { ConfirmarMailComponent } from './confirmar-mail/confirmar-mail.component';
import { IngresarCodigoComponent } from './ingresar-codigo/ingresar-codigo.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ReestablecerClaveComponent } from './reestablecer-clave/reestablecer-clave.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
{
  path: 'iniciarSesion',
  component: InicioSesionComponent

},
{
  path: 'reestablecerClave',
  component: ReestablecerClaveComponent
},
{
  path: 'confirmar-mail',
  component: ConfirmarMailComponent
},
{
  path: 'ingresar-codigo',
  component: IngresarCodigoComponent
},
{
  path: 'cambiarClave',
  component: CambiarClaveComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
