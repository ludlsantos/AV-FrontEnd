import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { JwtAuthService } from 'src/app/services/jwt-auth.service';



@Injectable({
  providedIn: 'root'
})
export class EsAdminGuard implements CanActivate {

  constructor(
    private cookieService: CookieService, 
    private router: Router,
    private jwtAuthService: JwtAuthService
    ) {

    

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

      

      console.log('CAN ACTIVE')
      const esAdmin = this.jwtAuthService.esAdmin();
     /*  if (!esAdmin) {
        void this.router.navigateByUrl('/login');
       
      }
      return esAdmin

    } */

    if (esAdmin == false) {
			void this.router.navigateByUrl('/login');
			
			return false;
		}
		return true;
	}
}

  
