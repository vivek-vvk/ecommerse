import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import{AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router){}


  canActivate():boolean{

    if (this.auth.userloggedIn()){
      
      return true
    }
    
    else{
      alert("You Need to Login to Access")
      this.router.navigate(['/login'])
      return false;
    }

  }
  
}
