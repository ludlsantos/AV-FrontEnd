
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as constantes from '../modelos/constantes';
import { Mesa } from '../modelos/mesa';


@Injectable({
  providedIn: 'root'
})

export class MesaService {

 

  constructor(private http: HttpClient) { }



  getMesasPorEvento(idEvento: number): Observable<Mesa[]>{
    return this.http.get<Mesa[]>(constantes.miApiUrl + constantes.apiUrlMesasPorEvento + idEvento);
  }

}