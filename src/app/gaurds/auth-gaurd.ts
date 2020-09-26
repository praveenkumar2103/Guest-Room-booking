import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserStorage } from "../storage/user-storage";

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(public router: Router, public userStorage: UserStorage) {}

	canActivate() {
		const user = this.userStorage.getUser();
		if (user) return true;

		// not logged in so redirect to login page with the return url
		this.router.navigate(['auth/']);
		return false;
	}
}
