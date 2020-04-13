import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private autchService: AuthService, private routes:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot){

  if (this.autchService.isAuth()){
    return true
  }else{
    this.routes.navigate(['/login'])

  }
  }
}