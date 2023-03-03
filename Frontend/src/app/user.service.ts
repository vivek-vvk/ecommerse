import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  server_address: string = 'http://localhost:3000';
 
  constructor(private http:HttpClient) { }


  signup(data:any){
    return this.http.post<any>(`${this.server_address}/login/signup`,{data:data})
  }

  login(data:any){
    return this.http.post<any>(`${this.server_address}/login/login`,{data:data})
  }



}
