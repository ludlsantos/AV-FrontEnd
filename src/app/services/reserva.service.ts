
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../modelos/reserva';
import * as constantes from '../modelos/constantes';
import { EstadoReserva } from '../modelos/estadoReserva';

@Injectable({
  providedIn: 'root'
})

export class ReservaService {

  filtroReserva!:"";


  constructor(private http: HttpClient) { }

  guardarReserva(reserva: Reserva): Observable<Reserva>{
    return this.http.post<Reserva>(constantes.miApiUrl + constantes.apiUrlReservas, reserva);
  }

  getReservasEvento(idEvento: number): Observable<Reserva>{
    return this.http.get<Reserva>(constantes.miApiUrl + constantes.apiUrlReservasPorEvento + idEvento);
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

cancelarReserva(id: number):Observable<Reserva>{
  return this.http.get<Reserva>(constantes.miApiUrl + constantes.apiUrlCancelarReserva + id);
}


updateEstadoReserva(nuevoEstadoReserva: EstadoReserva): Observable<Reserva> {
  //const ul = `${constantes.miApiUrl}${constantes.apiUrlReservas}`+reserva.idReserva;
  const url = `${constantes.apiUrlEstadoReservas}${nuevoEstadoReserva.idReserva}`;
  alert("esty aca..." + url)
  return this.http.put<Reserva>(url, nuevoEstadoReserva);
}

comentarioReserva(id: number):Observable<Reserva>{
  return this.http.get<Reserva>(constantes.miApiUrl + constantes.apiUrlComentarioReserva + id);
}

}
