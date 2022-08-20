import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

}
