import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PredeterminadoComponent } from './FrontEnd/inicio/predeterminado/predeterminado.component';
import { NavbarComponent } from './FrontEnd/paginaPrincipal/navbar/navbar.component';
import { MenuLateralComponent } from './FrontEnd/paginaPrincipal/menu-lateral/menu-lateral.component';
import { PiePaginaComponent } from './FrontEnd/paginaPrincipal/pie-pagina/pie-pagina.component';
import { EliminarCuentaComponent } from './modules/cliente/eliminar-cuenta/eliminar-cuenta.component';
import { SeccionesHomeComponent } from './secciones-home/secciones-home.component';
import { InicioSesionComponent } from './modules/seguridad/inicio-sesion/inicio-sesion.component';
import { CookieService } from 'ngx-cookie-service';
import { EliminarEventoComponent } from './modules/evento/eliminar-evento/eliminar-evento.component';
import { EditarEventoComponent } from './modules/evento/editar-evento/editar-evento.component';
import { ReservarComponent } from './modules/evento/reservar/reservar.component';

import { ComprobanteDePagoComponent } from './modules/comprobanteDePago/comprobanteDePago.component';
import { AsignacionManualAsientosComponent } from './modules/asignacion-manual-asientos/asignacion-manual-asientos.component';




import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltroEventoPipe } from './app.component';
import { EventosActivosComponent } from './modules/evento/eventos-activos/eventos-activos.component';
import { ReservasClienteComponent } from './modules/cliente/reservas-cliente/reservas-cliente.component';
import { CancelarReservaComponent } from './modules/cliente/cancelar-reserva/cancelar-reserva.component';
import { GestionarReservaComponent } from './modules/evento/gestionar-reserva/gestionar-reserva.component';
import { BrowserModule } from '@angular/platform-browser';
import { ListadoReservasActivasComponent } from './modules/evento/listado-reservas-activas/listado-reservas-activas.component';






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

        
        EditarEventoComponent,
        EliminarEventoComponent,
        ReservarComponent,

    InicioSesionComponent,
    EliminarEventoComponent,
    ComprobanteDePagoComponent,
    AsignacionManualAsientosComponent,
   



        EditarEventoComponent,
        EliminarEventoComponent,
        ReservarComponent,
    InicioSesionComponent,
    EliminarEventoComponent,
    EventosActivosComponent,
    ReservasClienteComponent,
    CancelarReservaComponent,
   GestionarReservaComponent,
   ListadoReservasActivasComponent,
     




  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCheckboxModule,

    
  ],

  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
