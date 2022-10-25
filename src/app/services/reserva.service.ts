
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
   );
}
getReservasTodas(): Observable<Reserva>{
  return this.http.get<Reserva>(constantes.miApiUrl + constantes.apiUrlReservas);
}


get(id: number):Observable<Reserva>{
  const url2 = `${constantes.miApiUrl}${constantes.apiUrlReservas}`+id;
  return this.http.get<Reserva>(url2);
}
getReserva(id: number): Observable<Reserva>{
  return this.http.get<Reserva>(constantes.miApiUrl + constantes.apiUrlReservas + id);
}
getGenerarQR(id: number): Observable<Reserva>{
  return this.http.get<Reserva>(constantes.miApiUrl + constantes.apiUrlGenerarQR + id);

}

cancelarReserva(id: number):Observable<Reserva>{
  return this.http.get<Reserva>(constantes.miApiUrl + constantes.apiUrlCancelarReserva + id);
};


 updateEstadoReserva(nuevoEstadoReserva: EstadoReserva): Observable<Reserva> {
  const url = `${constantes.apiUrlEstadoReservas}${nuevoEstadoReserva.idReserva}`;
  return this.http.put<Reserva>(url, nuevoEstadoReserva);

 }

 }


comentarioReserva(id: number):Observable<Reserva>{
  return this.http.get<Reserva>(constantes.miApiUrl + constantes.apiUrlComentarioReserva + id);
}

}

getReservasActivas(id:number): Observable<Reserva>{
  return this.http.get<Reserva>(constantes.miApiUrl + constantes.apiUrlAsignacionManual+id);
}
}

