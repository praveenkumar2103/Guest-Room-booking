import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { AuthService } from "../../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss', './login.component.scss']
})
export class LoginComponent implements OnInit {

	login:Login
	loginForm: FormGroup;
	submitted: boolean;
  
	constructor(private authService: AuthService,private router:Router) { }
  
	ngOnInit(): void {
	  this.login = new Login();
	  this.loginForm = new FormGroup({
		emailId : new FormControl(this.login.emailId, [Validators.required]),
		phoneNumber : new FormControl(this.login.phoneNumber, [Validators.required]),
		role : new FormControl(this.login.role, [Validators.required])
	  });
	}
  
	get emailId() {
		  return this.loginForm.get('emailId');
	  }
  
	  get phoneNumber() {
		  return this.loginForm.get('phoneNumber');
	}
	
	get role() {
		  return this.loginForm.get('role');
	  }
  
	loginSubmit() {
	  this.submitted = true;
	  if (this.loginForm.invalid) {
		return;
	  }
	  if (this.loginForm.valid) {
		console.log("submit : ",this.loginForm.value)
		this.authService.loginUser(this.loginForm.value).subscribe(
		  res => {
			const user = res.body;
			this.router.navigate(["/"]);
		  }, errorCode => {
			console.log('error' + errorCode);
		  }
		);
	  }
	}

}
