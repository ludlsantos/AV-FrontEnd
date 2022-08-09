import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  miAppUrl = '';
  miApiUrl = '';
  constructor(private http: HttpClient) { }
}
