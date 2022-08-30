import { Injectable } from '@angular/core';
import { localStorageJwt } from '../static/local-storage';
import jwtDecode from 'jwt-decode';
import { respuesta } from '../modelos/respuesta';
import { Token } from '@angular/compiler';
import { IJwt } from '../modelos/jwt';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {
	login(token: string): void {
		const decode = jwtDecode<IJwt>(token);
		localStorage.setItem(localStorageJwt.LS_ACCESS_TOKEN, token);
		localStorage.setItem(localStorageJwt.LS_ROLES, JSON.stringify(decode.rol));
    localStorage.setItem(localStorageJwt.LS_CORREO, JSON.stringify(decode.correoElectronico));
	}

	estaLogeado(): boolean {
    console.log('Esta logueado');
		const siRol = localStorage.getItem(localStorageJwt.LS_ROLES);
		if (!siRol) {
			return false;
		}
		const rolArray = JSON.parse(siRol) as Array<string>;
		if (rolArray.length == 0) {
			return false;
		}

		return true;

    
	}

	esAdmin(): boolean {
    console.log('Es administrador');
		const siRol = localStorage.getItem(localStorageJwt.LS_ROLES)!;
		const rolArray = JSON.parse(siRol) as Array<string>;
		const rolAdmin = rolArray.find((x) => x === 'Administrador');

		return true;
	}
}