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

putClienteCorreo(correoElectronico: string): Observable<Login>{
  const ul = `${constantes.miApiUrl}${constantes.apiUrlGetClienteCorreo}${correoElectronico}`;
  alert("esty aca..." + ul)
  return this.http.put<Login>(ul, Login);

}

eliminarCliente(id: number): Observable<Cliente>{
  return this.http.delete<Cliente>(constantes.miApiUrl + constantes.apiUrlClientes + id);
}
 


getRecordById(id: number): Observable<Cliente> {
  const url = `${constantes.miApiUrl}${constantes.apiUrlClientes}${id}`;
  return this.http.get<Cliente>(url);
}

updateCliente(id:number, cliente:Cliente): Observable<Cliente>{
  const ul = `${constantes.miApiUrl}${constantes.apiUrlClientes}`+cliente.clienteId;
  alert("esty aca..." + ul)
  return this.http.put<Cliente>(ul, cliente);

 // return this.http.put

}


}
