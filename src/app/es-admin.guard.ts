import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class EsAdminGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router) {

    

  }

  
    decofificarToken(token: string): any {
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
    }
  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var cookie= this.cookieService.check('respuesta');
      if (cookie)  {
        cookie = true
        var valorToken = this.cookieService.get('respuesta'); 

      
        const tokenInfo = this.decofificarToken(valorToken);
        const expireDate = tokenInfo.exp; 
        console.log(tokenInfo);

        // agregar lo de validar rol

      
      }
      else

      

      this.redirect(cookie)
      return cookie;

    }

  
  }
