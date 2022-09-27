import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../modelos/evento' ;
import * as constantes from '../modelos/constantes';


@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) { }

  crearEvento(evento: Evento): Observable<Evento>{
    return this.http.post<Evento>(constantes.miApiUrl + constantes.apiUrlEventos, evento);
  }

  url = `${constantes.miApiUrl}${constantes.apiUrlEventos}`

   getEventos(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    return this.http.get(this.url, {
      headers: header
    } 
      );
   }
   
  /* getEventoId(id: String): Observable<Evento> {
    const url = `${constantes.apiUrlEventosId}${id}`;
    return this.http.get<Evento>(this.url);
  }
  */


 get(id: number):Observable<Evento>{
    const urll = `${constantes.miApiUrl}${constantes.apiUrlEventos}`+id;
    return this.http.get<Evento>(urll);
  }

  getEvento(id: number): Observable<Evento>{
    return this.http.get<Evento>(constantes.miApiUrl + constantes.apiUrlEventos + id);
  }

  /*
  putRecordById(form: Evento): Observable<ResponseInit> {
    let url = `${constantes.miApiUrl}${constantes.apiUrlEventos}`;
    return this.http.put<ResponseInit>(url,form);
  }
*/
  
eliminarEvento(id: number): Observable<Evento>{
  return this.http.delete<Evento>(constantes.miApiUrl + constantes.apiUrlEventos + id);
}

eventoModificado(id: number): Observable<Evento>{
  return this.http.get<Evento>(constantes.miApiUrl + constantes.apiUrlCorreoReservas + id);
}

}

