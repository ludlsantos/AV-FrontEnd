import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsAdminGuard } from 'src/app/Guards/es-admin.guard';
import { RegistrarseComponent } from './registrarse/registrarse.component';

const routes: Routes = [
{
  path: 'registrarse',
  component: RegistrarseComponent,
  //canActivate: [EsAdminGuard]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
