import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { FullproductComponent } from './fullproduct/fullproduct.component';
import { FormsModule } from '@angular/forms';


import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MoredetailComponent } from './moredetail/moredetail.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FullproductComponent,
    LoginComponent,
    SignupComponent,
    MoredetailComponent,
    AdminComponent,
    CartComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
