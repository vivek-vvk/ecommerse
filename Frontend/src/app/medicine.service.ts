import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http:HttpClient) { }

  server_address: string = 'http://localhost:3000';

  medicines(){
    return this.http.get<any>(`${this.server_address}/detail/medicine`)
  }

  seperate(id:any){
    return this.http.get<any>(`${this.server_address}/detail/med/${id}`)
  }
}
