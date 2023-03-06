import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-moredetail',
  templateUrl: './moredetail.component.html',
  styleUrls: ['./moredetail.component.css']
})
export class MoredetailComponent implements OnInit {

  medicine=
    {
      name:"",
      amount:"",
      image:"",
      information:""
    }

    
    counter = 0;
    step = 1;
    increment() {
      this.counter += this.step;
    }
    
    decrement() {
      this.counter -= this.step;
    }

  constructor(private medicineService:MedicineService) { }

  ngOnInit(): void {
    let productId = localStorage.getItem("editProductId");
    this.medicineService.seperate(productId).subscribe((data)=>{
      this.medicine=JSON.parse(JSON.stringify(data));
    
  })
  }

  

}
