import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';

import { LoginComponent } from './login/login.component';
import { OwnerRegisterComponent } from './owner-register/owner-register.component';

const routes : Routes = [
	{ path: '', redirectTo: 'signin', pathMatch: 'full' },
	{ path: 'signin', component: LoginComponent },
	{ path: 'register-owner', component: OwnerRegisterComponent },
	{ path: 'register-customer', component: CustomerRegisterComponent }	
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [ RouterModule ],
	providers: [],
	declarations: []
})

export class AuthRoutingModule { }
