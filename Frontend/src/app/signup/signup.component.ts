import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user={
    email:"",
    username:"",
    password:"",
    confpass:"",
    role:"",
    checkbox:false
  }




  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  signup(){
    this.userservice.signup(this.user).subscribe((res)=>{

      if(res.status){
        alert("Signup success");
        this.router.navigate(['login']);
       }else{
        alert("Email already taken");
        window.location.reload();
       };
    });
};



}
