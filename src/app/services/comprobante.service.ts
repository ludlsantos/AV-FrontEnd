import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as constantes from '../modelos/constantes';
import { Observable } from 'rxjs';
import { ComprobanteDePago} from '../modelos/comprobanteDePago';
import { ComprobanteDePagoComponent } from '../modules/comprobanteDePago/comprobanteDePago.component';
import { Reserva } from '../modelos/reserva';


@Injectable({
  providedIn: 'root'
})
export class ComprobanteService {

  constructor(private http: HttpClient) { }

/*   public postComprobante(url:string, body: FormData){
    return this.http.post(url,body); 
  }
 */
 postComprobante(comprobanteDePago: ComprobanteDePago): Observable<ComprobanteDePago>{
    return this.http.post<ComprobanteDePago>(constantes.miApiUrl + constantes.apiUrlComprobanteDePagp, comprobanteDePago); 
  
  }

  getComprobante(id: number): Observable<Reserva>{
    return this.http.get<Reserva>(constantes.miApiUrl + constantes.apiUrlComprobanteDePagp + id);
  }

/*   public getComprobante(url:string){
    return this.http.get(url);
  }
 */
 
  
}