
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../modelos/reserva';


import * as constantes from '../modelos/constantes';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {


  constructor(private http: HttpClient) { }

  guardarReserva(reserva: Reserva): Observable<Reserva>{
    return this.http.post<Reserva>(constantes.miApiUrl + constantes.apiUrlReservas, reserva);
  }

  getReservasEvento(idEvento: number): Observable<Reserva>{
    return this.http.get<Reserva>(constantes.miApiUrl + constantes.apiUrlCorreoReservas + idEvento);
  }

  envioCorreo(reservas: Array<Reserva>): Observable<Reserva>{
    return this.http.get<Reserva>(constantes.miApiUrl+ constantes.apiUrlCorreoReservas + reservas);
  }

  crearReserva(reserva: Reserva): Observable<Reserva>{
    return this.http.post<Reserva>(constantes.miApiUrl + constantes.apiUrlReservas, reserva);
}
url = `${constantes.miApiUrl}${constantes.apiUrlReservas}`

getReservas(){
  let header = new HttpHeaders()
  .set('Type-content', 'aplication/json')
  return this.http.get(this.url, {
    headers: header
 } 
   );
}
get(id: number):Observable<Reserva>{
  const url2 = `${constantes.miApiUrl}${constantes.apiUrlReservas}`+id;
  return this.http.get<Reserva>(url2);
}


}
