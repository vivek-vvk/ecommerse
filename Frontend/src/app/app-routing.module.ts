import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoredetailComponent } from './moredetail/moredetail.component';
import { SignupComponent } from './signup/signup.component';

import{UserGuard}from './user.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'more' , component:MoredetailComponent},
  {path:'admin',component:AdminComponent},
  {path:'cart',component:  CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
