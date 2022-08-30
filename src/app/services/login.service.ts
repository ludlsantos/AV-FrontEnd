import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../modelos/login';
import * as constantes from '../modelos/constantes';
import { respuesta } from '../modelos/respuesta';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  guardarLogin(login: Login): Observable<Login>{
    return this.http.post<Login>(constantes.miApiUrl + constantes.apiUrlLogin, login);
}

obtenerToken(login: Login): Observable<respuesta>{
  return this.http.post<respuesta>(constantes.miApiUrl + constantes.apiUrlIdenidad, login);
}

enviarCorreo(correoElectronico: string): Observable<Login>{
  return this.http.get<Login>(constantes.miApiUrl + constantes.apiUrlClientesPorCorreo + correoElectronico);
} 

cambiarClave(id: string, login: Login): Observable<Login>{
   return this.http.put<Login>(constantes.miApiUrl + constantes.apiUrlLogin + id, login);
}

getLogin(id: string): Observable<Login> {
  return this.http.get<Login>(constantes.miApiUrl + constantes.apiUrlLogin + id);
}
}


