import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../modelos/login';
import * as constantes from '../modelos/constantes';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  guardarLogin(login: Login): Observable<Login>{
    return this.http.post<Login>(constantes.miApiUrl + constantes.apiUrlLogin, login);
}

}


