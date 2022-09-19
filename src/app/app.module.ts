import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PredeterminadoComponent } from './FrontEnd/inicio/predeterminado/predeterminado.component';
import { NavbarComponent } from './FrontEnd/paginaPrincipal/navbar/navbar.component';
import { MenuLateralComponent } from './FrontEnd/paginaPrincipal/menu-lateral/menu-lateral.component';
import { PiePaginaComponent } from './FrontEnd/paginaPrincipal/pie-pagina/pie-pagina.component';

import { EliminarCuentaComponent } from './modules/cliente/eliminar-cuenta/eliminar-cuenta.component';

import { SeccionesHomeComponent } from './secciones-home/secciones-home.component';

import { InicioSesionComponent } from './modules/seguridad/inicio-sesion/inicio-sesion.component';
import { CookieService } from 'ngx-cookie-service';
import { EliminarEventoComponent } from './modules/evento/eliminar-evento/eliminar-evento.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    AppComponent,
    PredeterminadoComponent,
    NavbarComponent,
    MenuLateralComponent,
    PiePaginaComponent,
    EliminarCuentaComponent,
    SeccionesHomeComponent,
    InicioSesionComponent,
    EliminarEventoComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],

  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
