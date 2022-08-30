import { Injectable, ResolvedReflectiveFactory } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Token } from '@angular/compiler';
import jwt_decode from 'jwt-decode';
import { JwtAuthService } from 'src/app/services/jwt-auth.service';


@Injectable({
  providedIn: 'root'
})
export class EstaLogueadoGuard implements CanActivate {

  constructor(
    private cookieService: CookieService, 
    private router: Router, 
    private jwtAuthService: JwtAuthService
    ){

    

  }

  
/*     decodificarToken(token: string): any {
      try {
        return jwt_decode(token);
      } catch(Error) {
        return null;
      }
    }


    redirect(flag: boolean): any {
      if(!flag) {
        this.router.navigate(['/','login'])
      }
    } */
  
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log('CAN ACTIVE')
      const estaLogeado = this.jwtAuthService.estaLogeado();
      if (!estaLogeado) {
        void this.router.navigateByUrl('/login');
       
      }
      return estaLogeado



   /*    var cookie= this.cookieService.check('respuesta');
      if (cookie)  {
        cookie = true
        var valorToken = this.cookieService.get('respuesta'); 
        const tokenInfo = this.decodificarToken(valorToken);
        const expireDate = tokenInfo.exp; 
        console.log(tokenInfo);

        return tokenInfo.correoElectronico;
      }
      else

      this.redirect(cookie)
      return cookie; */

    }
    


  
  }
