import { Injectable } from '@angular/core';
import { localStorageJwt } from '../static/local-storage';
import jwtDecode from 'jwt-decode';
import { respuesta } from '../modelos/respuesta';
import { Token } from '@angular/compiler';
import { IJwt } from '../modelos/jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {

	constructor(
		
		private router: Router,

	){
		
	}




	login(token: string): void {
		const decode = jwtDecode<IJwt>(token);
		localStorage.setItem(localStorageJwt.LS_ACCESS_TOKEN, token);
		localStorage.setItem(localStorageJwt.LS_ROLES, JSON.stringify(decode.rol));
        localStorage.setItem(localStorageJwt.LS_CORREO, JSON.stringify(decode.correoElectronico));
	}

  

	estaLogeado(): boolean {
    /* console.log('Esta logueado'); */
		const siToken = localStorage.getItem(localStorageJwt.LS_ACCESS_TOKEN);
		if (!siToken) {
			return false;
		}
/* 		const rolArray = JSON.parse(siRol) as Array<string>;
		if (rolArray.length == 0) {
			return false;
		} */

		return true;

    
	}

	NoEstaLogeado(): boolean {
		/* console.log('Esta logueado'); */
			const siToken = localStorage.getItem(localStorageJwt.LS_ACCESS_TOKEN);
			if (siToken) {
				return false;
			}
	/* 		const rolArray = JSON.parse(siRol) as Array<string>;
			if (rolArray.length == 0) {
				return false;
			} */
	
			return true;
	
		
		}

	esAdmin(): boolean {
    /* console.log('Es administrador'); */
		const siRol = localStorage.getItem(localStorageJwt.LS_ROLES)!;
		const rolArray = JSON.parse(siRol);
		const rol = "Administrador"
		//const rolAdmin = rolArray.find((x) => x === 'Administrador');

		if (rolArray == rol)
		{
			/* alert (rolArray) */

		return true;
	}

		else 
		/* alert ('No tiene permisos para acceder') */
		return false;
	
	}

	esCliente(): boolean {
		/* console.log('Es administrador'); */
			const siRol = localStorage.getItem(localStorageJwt.LS_ROLES)!;
			const rolArray = JSON.parse(siRol);
			const rol = "Cliente"
			//const rolAdmin = rolArray.find((x) => x === 'Administrador');
	
			if (rolArray == rol)
			{
				// alert (rolArray)
	
			return true;
		}
	
			else 
			/* alert ('No tiene permisos para acceder') */
			return false;
		
		}

	public cerrarSesion(): void {
 
  
		localStorage.removeItem(localStorageJwt.LS_ACCESS_TOKEN);
		localStorage.removeItem(localStorageJwt.LS_ROLES);
		localStorage.removeItem(localStorageJwt.LS_CORREO);
		this.router.navigate(['/seguridad/iniciarSesion']);
	  }
}