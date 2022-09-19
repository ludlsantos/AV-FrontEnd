import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reserva } from '../modelos/reserva';
import { Observable } from 'rxjs';
import * as constantes from '../modelos/constantes';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

constructor(private http: HttpClient) { }

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
