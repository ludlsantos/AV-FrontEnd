import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

}

