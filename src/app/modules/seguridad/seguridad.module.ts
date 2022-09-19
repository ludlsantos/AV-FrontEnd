import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ReestablecerClaveComponent } from './reestablecer-clave/reestablecer-clave.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { ConfirmarMailComponent } from './confirmar-mail/confirmar-mail.component';
import { IngresarCodigoComponent } from './ingresar-codigo/ingresar-codigo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ReestablecerClaveComponent,
    CambiarClaveComponent,
    ConfirmarMailComponent,
    IngresarCodigoComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class SeguridadModule { }
