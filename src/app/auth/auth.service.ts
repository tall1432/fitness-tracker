import{Subject} from 'rxjs/Subject'
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{
  authChange = new Subject<boolean>();
  private user: User;
  constructor(private router : Router){

  }
  registerUser(authData: AuthData){
    this.user = {
      email:authData.email,
      userId: Math.round(Math.random()*10000).toString()

    };
    this.authSucessefully();

  }
  login(authData:AuthData){
    this.user = {
      email:authData.email,
      userId: Math.round(Math.random()*10000).toString()

    };
  this.authSucessefully();
  }
  logout(){
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['']);
  }

  getUser(){
    return{...this.user};
  }
  isAuth(){
    return this.user !=null;
  }
 private  authSucessefully(){
  this.authChange.next(true);
  this.router.navigate(['/training']);
  }
}