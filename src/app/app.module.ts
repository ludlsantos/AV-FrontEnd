import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';



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

import { ReactiveFormsModule } from '@angular/forms';



import { InicioSesionComponent } from './modules/seguridad/inicio-sesion/inicio-sesion.component';
import { CookieService } from 'ngx-cookie-service';
import { ListadoEventoComponent } from './modules/listadoEvento/listadoEvento/listadoEvento.component';
import { EliminarEventoComponent } from './modules/evento/eliminar-evento/eliminar-evento.component';

import { EditarEventoComponent } from './modules/evento/editar-evento/editar-evento.component';
import { ReservarComponent } from './modules/evento/reservar/reservar.component';


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
        ListadoEventoComponent,
        EditarEventoComponent,
        EliminarEventoComponent,
        ReservarComponent

    InicioSesionComponent,
    EliminarEventoComponent,




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
  ],

  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
