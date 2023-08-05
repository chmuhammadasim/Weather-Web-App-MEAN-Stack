import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/sdk/services/authservice/auth.service';
Injectable({
  providedIn: 'root'
})
export class isloginGuard implements CanActivate  {
  constructor(
    private router: Router, private authService: AuthService
  ){}
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Promise<boolean> {
    const token = await this.authService.getTokenFromStorage();
    if (!token) {
      this.router.navigate(['login']);
      return false;
    } else {
      return true;
    }
  }
};
