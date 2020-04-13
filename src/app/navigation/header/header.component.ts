import { Component, OnInit, EventEmitter, Output , OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
 @Output()sidenavToglle = new EventEmitter<void>();
 isAuth: boolean;
 authSubscription:Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
   this.authSubscription = this.authService.authChange.subscribe(authStatus=>{
      this.isAuth = authStatus;

    })
  }
onToggleSidenav(){
this.sidenavToglle.emit();

}

onLogout(){
  this.authService.logout();
}
ngOnDestroy(){
  this.authSubscription.unsubscribe();
}
}
