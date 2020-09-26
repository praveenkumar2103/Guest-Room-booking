import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.scss']
})
export class CustomerRegisterComponent implements OnInit {

  register:Register
  registerForm: FormGroup;
  submitted: boolean;

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.register = new Register();
    this.registerForm = new FormGroup({
      emailId : new FormControl(this.register.emailId, [Validators.required]),
      phoneNumber : new FormControl(this.register.phoneNumber, [Validators.required]),
      role : new FormControl(this.register.role, [Validators.required])
    });
    this.registerForm.patchValue({
      role:"customer"
    });
  }

  get emailId() {
		return this.registerForm.get('emailId');
	}

	get phoneNumber() {
		return this.registerForm.get('phoneNumber');
  }
  
  get role() {
		return this.registerForm.get('role');
	}

  registerSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.registerForm.valid) {
      console.log("submit : ",this.registerForm.value)
      this.authService.registerOwner(this.registerForm.value).subscribe(
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
