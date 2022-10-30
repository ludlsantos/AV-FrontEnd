import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../modelos/evento' ;
import * as constantes from '../modelos/constantes';
import { Mesa } from '../modelos/mesa';



@Injectable({
  providedIn: 'root'
})
export class EventoService {
  filtroEvento!: "";
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

 get(id: number):Observable<Evento>{
    const urll = `${constantes.miApiUrl}${constantes.apiUrlEventos}`+id;
    return this.http.get<Evento>(urll);
  }

  getEvento(id: number): Observable<Evento>{
    return this.http.get<Evento>(constantes.miApiUrl + constantes.apiUrlEventos + id);
  }

update(id:number, evento:Evento): Observable<Evento>{
  const ul = `${constantes.miApiUrl}${constantes.apiUrlEventos}`+evento.eventoId;
  return this.http.put<Evento>(ul, evento);
}
  
eliminarEvento(id: number): Observable<Evento>{
  return this.http.delete<Evento>(constantes.miApiUrl + constantes.apiUrlEventos + id);
}

eventoModificado(id: number): Observable<Evento>{
  return this.http.get<Evento>(constantes.miApiUrl + constantes.apiUrlEventoModificado + id);
}


arregloMesas(id: number): Observable<Mesa[]>{
  return this.http.get<Mesa[]>(constantes.miApiUrl + constantes.apiUrlArregloMesas + id);
}

}

