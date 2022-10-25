import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as constantes from '../modelos/constantes';
import { Observable } from 'rxjs';
import { ComprobanteDePago} from '../modelos/comprobanteDePago';
import { ComprobanteDePagoComponent } from '../modules/comprobanteDePago/comprobanteDePago.component';


@Injectable({
  providedIn: 'root'
})
export class ComprobanteService {

  constructor(private http: HttpClient) { }

/*   public postComprobante(url:string, body: FormData){
    return this.http.post(url,body); 
  }
 */
 public postComprobante(comprobanteDePago: ComprobanteDePago): Observable<ComprobanteDePago>{
    return this.http.post<ComprobanteDePago>(constantes.miApiUrl + constantes.apiUrlComprobanteDePagp, comprobanteDePago); 
  
  }

  getComprobante(idDocumento: number): Observable<ComprobanteDePago>{
    return this.http.get<ComprobanteDePago>(constantes.miApiUrl + constantes.apiUrlReservas + idDocumento);
  }

/*   public getComprobante(url:string){
    return this.http.get(url);
  }
 */
 
  
}