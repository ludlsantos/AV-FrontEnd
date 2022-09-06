import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
import { catchError, Observable, tap } from 'rxjs';
import { Cliente } from '../modelos/cliente';
import * as constantes from '../modelos/constantes';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http: HttpClient) { }


guardarCliente(cliente: Cliente): Observable<Cliente>{
 return this.http.post<Cliente>(constantes.miApiUrl + constantes.apiUrlClientes, cliente);
}
 


getRecordById(id: String): Observable<Cliente> {
  const url = `${constantes.miApiUrl}${constantes.apiUrlClientes}${id}`;
  return this.http.get<Cliente>(url);
}



}
