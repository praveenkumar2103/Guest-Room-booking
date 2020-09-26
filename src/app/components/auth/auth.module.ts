import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';

import { AuthService } from "../../services/auth/auth.service";
import { OwnerRegisterComponent } from './owner-register/owner-register.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component'

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    OwnerRegisterComponent,
    CustomerRegisterComponent
  ],
  providers:[
    AuthService
  ]
})

export class AuthModule { }
