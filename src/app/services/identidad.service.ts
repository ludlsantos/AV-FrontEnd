import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as constantes from '../modelos/constantes';

@Injectable({
  providedIn: 'root'
})
export class IdentidadService {
  constructor(private http: HttpClient) { }


}