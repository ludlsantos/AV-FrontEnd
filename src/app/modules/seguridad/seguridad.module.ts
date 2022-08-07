import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { ReestablecerClaveComponent } from './reestablecer-clave/reestablecer-clave.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { ConfirmarMailComponent } from './confirmar-mail/confirmar-mail.component';
import { IngresarCodigoComponent } from './ingresar-codigo/ingresar-codigo.component';


@NgModule({
  declarations: [
    CerrarSesionComponent,
    ReestablecerClaveComponent,
    CambiarClaveComponent,
    ConfirmarMailComponent,
    IngresarCodigoComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
