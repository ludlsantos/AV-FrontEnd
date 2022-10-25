import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from '../modelos/administrador';
import * as constantes from '../modelos/constantes';


@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http: HttpClient) { }

    getAdminCorreo(correoElectronico: string, pass: string): Observable<Administrador>{
    return this.http.get<Administrador>(constantes.miApiUrl + constantes.apiUrlGetAdminCorreo + correoElectronico + "/" + pass);
  }

  guardarAdmin(admin: Administrador): Observable<Administrador>{
    return this.http.post<Administrador>(constantes.miApiUrl + constantes.apiUrlAdministradores, admin);
  }

  getAdmin(correoElectronico: string): Observable<Administrador>{
    return this.http.get<Administrador>(constantes.miApiUrl + constantes.apiUrlGetAdminCorreo + correoElectronico);
  } 

}
