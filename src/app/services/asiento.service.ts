import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asiento } from '../modelos/asiento';
import * as constantes from '../modelos/constantes';

@Injectable({
    providedIn: 'root'
  })
  
  export class AsientoService {
  
   
  
    constructor(private http: HttpClient) { }
  
  
  
    getAsientosPorMesa(idMesa: number): Observable<Asiento[]>{
      return this.http.get<Asiento[]>(constantes.miApiUrl + constantes.apiUrlAsientosPorMesa+ idMesa);
    }

    
  putAsiento(id: number, asiento: Asiento): Observable<Asiento>{
    return this.http.put<Asiento>(constantes.miApiUrl + constantes.apiUrlAsientos + id, asiento);
 }
  
  }
  

