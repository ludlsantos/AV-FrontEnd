import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { Cliente } from '../modelos/cliente';
import * as constantes from '../modelos/constantes';
import { Login } from '../modelos/login';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http: HttpClient) { }


guardarCliente(cliente: Cliente): Observable<Cliente>{
 return this.http.post<Cliente>(constantes.miApiUrl + constantes.apiUrlClientes, cliente);
}

getClienteCorreoyPass(correoElectronico: string, pass: string): Observable<Cliente>{
  return this.http.get<Cliente>(constantes.miApiUrl + constantes.apiUrlGetClienteCorreo + correoElectronico + "/" + pass);
}

getClienteCorreo(correoElectronico: string): Observable<Cliente>{
  return this.http.get<Cliente>(constantes.miApiUrl + constantes.apiUrlGetClienteCorreo + correoElectronico);
}

eliminarCliente(id: number): Observable<Cliente>{
  return this.http.delete<Cliente>(constantes.miApiUrl + constantes.apiUrlClientes + id);
}
 


getRecordById(id: String): Observable<Cliente> {
  const url = `${constantes.miApiUrl}${constantes.apiUrlClientes}${id}`;
  return this.http.get<Cliente>(url);
}



}
