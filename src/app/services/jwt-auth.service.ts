import { Injectable } from '@angular/core';
import { localStorageJwt } from '../static/local-storage';
import jwtDecode from 'jwt-decode';
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
		const siToken = localStorage.getItem(localStorageJwt.LS_ACCESS_TOKEN);
		if (!siToken) {
			return false;
		}

		return true;

    
	}

	NoEstaLogeado(): boolean {
			const siToken = localStorage.getItem(localStorageJwt.LS_ACCESS_TOKEN);
			if (siToken) {
				return false;
			}
	
			return true;
	
		
		}

	esAdmin(): boolean {
		const siRol = localStorage.getItem(localStorageJwt.LS_ROLES)!;
		const rolArray = JSON.parse(siRol);
		const rol = "Administrador"

		if (rolArray == rol)
		{

		return true;
	}

		else 
		return false;
	
	}

	esCliente(): boolean {
			const siRol = localStorage.getItem(localStorageJwt.LS_ROLES)!;
			const rolArray = JSON.parse(siRol);
			const rol = "Cliente"
	
			if (rolArray == rol)
			{
	
			return true;
		}
	
			else 
			return false;
		
		}

		esClienteOInvitado(): boolean {
			const siRol = localStorage.getItem(localStorageJwt.LS_ROLES)!;
			const rolArray = JSON.parse(siRol);
			const rol = "Cliente"
			const siToken = localStorage.getItem(localStorageJwt.LS_ACCESS_TOKEN);
			if (rolArray == rol || !siToken)
			{
	
			return true;
			}
	
			else 
			return false;
		
		}



	public cerrarSesion(): void {
 
  
		localStorage.removeItem(localStorageJwt.LS_ACCESS_TOKEN);
		localStorage.removeItem(localStorageJwt.LS_ROLES);
		localStorage.removeItem(localStorageJwt.LS_CORREO);
		this.router.navigate(['/seguridad/iniciarSesion']);
		

	  }
}