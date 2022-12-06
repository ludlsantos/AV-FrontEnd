
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
  ReservasPorEventos() {
    throw new Error('Method not implemented.');
  }

  filtroReserva!:"";


  constructor(private http: HttpClient) { }

  guardarReserva(reserva: Reserva): Observable<Reserva>{
    return this.http.post<Reserva>(constantes.miApiUrl + constantes.apiUrlReservas, reserva);
  }

  getReservasEvento(idEvento: number): Observable<Reserva[]>{
    return this.http.get<Reserva[]>(constantes.miApiUrl + constantes.apiUrlReservasPorEvento + idEvento);
  }

  envioCorreoEventoEliminado(id: number): Observable<Reserva[]>{
    return this.http.get<Reserva[]>(constantes.miApiUrl+ constantes.apiUrlCorreoReservas + id);
  }

  envioCorreoListaReservas(reservas: Array<Reserva>): Observable<Reserva[]>{
    return this.http.get<Reserva[]>(constantes.miApiUrl+ constantes.apiUrlCorreoReservas + reservas);
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

getReservasTodas(): Observable<Reserva>{
  return this.http.get<Reserva>(constantes.miApiUrl + constantes.apiUrlReservas);
}


getReserva(id: number): Observable<Reserva>{
  return this.http.get<Reserva>(constantes.miApiUrl + constantes.apiUrlReservas + id);
}


cancelarReserva(id: number):Observable<Reserva>{
  return this.http.get<Reserva>(constantes.miApiUrl + constantes.apiUrlCancelarReserva + id);
};


 updateEstadoReserva(nuevoEstadoReserva: EstadoReserva): Observable<Reserva> {
  const url = `${constantes.apiUrlEstadoReservas}${nuevoEstadoReserva.idReserva}`;
  return this.http.put<Reserva>(url, nuevoEstadoReserva);

 }

 putReserva(id: number, reserva: Reserva): Observable<Reserva>{
  return this.http.put<Reserva>(constantes.miApiUrl + constantes.apiUrlReservas + id, reserva);
}

getReservasActivas(id:number): Observable<Reserva>{
  return this.http.get<Reserva>(constantes.miApiUrl + constantes.apiUrlAsignacionManual+id);
}

comentarioReserva(id: number):Observable<Reserva>{
  return this.http.get<Reserva>(constantes.miApiUrl + constantes.apiUrlComentarioReserva + id);
}

postReservarAsiento(reserva: Reserva): Observable<Reserva>{
  return this.http.post<Reserva>(constantes.miApiUrl + constantes.apiUrlReservarAsientos, reserva);
}

}

