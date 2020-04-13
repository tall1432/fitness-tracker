import { Component, OnInit ,EventEmitter, Output , OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
@Output() sidenavClose = new EventEmitter<void>();
isAuth: boolean;
authSubscription:Subscription;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
   this.authSubscription = this.authService.authChange.subscribe(authStatus=>{
    this.isAuth = authStatus;

  })
  }
onSidenavClose(){
this.sidenavClose.emit();
}
ngOnDestroy(){
this.authSubscription.unsubscribe();
}
}
