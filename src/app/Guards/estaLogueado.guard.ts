import { Injectable, ResolvedReflectiveFactory } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { JwtAuthService } from 'src/app/services/jwt-auth.service';


@Injectable({
  providedIn: 'root'
})
export class EstaLogueadoGuard implements CanActivate {

  constructor(
    private router: Router, 
    private jwtAuthService: JwtAuthService
    ){

    

  }

  
    decodificarToken(token: string): any {
      try {
        return jwt_decode(token);
      } catch(Error) {
        return null;
      }
    }


    redirect(flag: boolean): any {
      if(!flag) {
        this.router.navigate(['/seguridad/iniciarSesion'])
      }
    }
  
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log('CAN ACTIVE')
      const estaLogeado = this.jwtAuthService.estaLogeado();
      if (!estaLogeado) {
        void this.router.navigateByUrl('/seguridad/iniciarSesion');

       


      }
      return estaLogeado;


    }
    


  
  }
function jwt_decode(token: string): any {
  throw new Error('Function not implemented.');
}

