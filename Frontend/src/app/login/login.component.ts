import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user={
  email:"",
  password:"",
  role:""
}

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }


  login(){
    this.userService.login(this.user).subscribe((res)=>{

      if(res.status){
        localStorage.setItem('token' , res.token)
        localStorage.setItem('email' , res.email)
        localStorage.setItem('username' , res.username)
        Swal.fire(' logged inn!!');  
        this.router.navigate(['/'])

       }else{
        console.log(res.data)
        var error = res.data;
        alert(error);
       }

        })
  }



}
