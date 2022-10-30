import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as constantes from '../modelos/constantes';
import { Observable } from 'rxjs';
import { ComprobanteDePago} from '../modelos/comprobanteDePago';
import { Reserva } from '../modelos/reserva';


@Injectable({
  providedIn: 'root'
})
export class ComprobanteService {

  constructor(private http: HttpClient) { }

 postComprobante(comprobanteDePago: ComprobanteDePago): Observable<ComprobanteDePago>{
    return this.http.post<ComprobanteDePago>(constantes.miApiUrl + constantes.apiUrlComprobanteDePago, comprobanteDePago); 
  
  }

  getComprobante(id: number): Observable<Reserva>{
    return this.http.get<Reserva>(constantes.miApiUrl + constantes.apiUrlComprobanteDePago + id);
  }

 
  
}