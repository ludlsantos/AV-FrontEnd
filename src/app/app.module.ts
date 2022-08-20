import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PredeterminadoComponent } from './FrontEnd/inicio/predeterminado/predeterminado.component';
import { NavbarComponent } from './FrontEnd/paginaPrincipal/navbar/navbar.component';
import { MenuLateralComponent } from './FrontEnd/paginaPrincipal/menu-lateral/menu-lateral.component';
import { PiePaginaComponent } from './FrontEnd/paginaPrincipal/pie-pagina/pie-pagina.component';
import { SeccionesHomeComponent } from './secciones-home/secciones-home.component';


@NgModule({
  declarations: [
    AppComponent,
    PredeterminadoComponent,
    NavbarComponent,
    MenuLateralComponent,
    PiePaginaComponent,
    SeccionesHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
