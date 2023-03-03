import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-fullproduct',
  templateUrl: './fullproduct.component.html',
  styleUrls: ['./fullproduct.component.css']
})
export class FullproductComponent implements OnInit {

  medicine=[
    {
      name:"",
      amount:"",
      image:""
    }
  ]

  constructor(private medicineService:MedicineService,private router:Router, public _auth:AuthService) { }

  ngOnInit(): void {
    this.medicineService.medicines().subscribe((data)=>{
      this.medicine=JSON.parse(JSON.stringify(data))
    })

  }

   btn(i:any){
    localStorage.setItem("editProductId", i._id.toString());
    this.router.navigate(['more']);

   }
   

  }




