import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

userloggedIn(){
    return !!sessionStorage.getItem('token')
  }
  
  getToken(){
    return sessionStorage.getItem("token")
  }
 
}
