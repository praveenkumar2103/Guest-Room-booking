import { Injectable } from '@angular/core';


const TOKEN_KEY = 'AuthToken';
const USER_KEY = 'user';

@Injectable()
export class UserStorage {

	constructor() { }

	public signOut() {
		window.localStorage.removeItem(TOKEN_KEY);
		window.localStorage.clear();
	}

	public saveToken(token: string) {
		if (!token) return;
		window.localStorage.removeItem(TOKEN_KEY);
		window.localStorage.setItem(TOKEN_KEY,  token);
	}

	public saveUser(user: any) {
		window.localStorage.setItem(USER_KEY, JSON.stringify(user));
	}

	public getUser() {
		return JSON.parse(window.localStorage.getItem(USER_KEY));
	}

	public getToken(): string {
		return localStorage.getItem(TOKEN_KEY);
	}

	
	public putKey(key, value) {
		window.localStorage.setItem(key, value);
	}

	public getKey(key): string {
		return window.localStorage.getItem(key);
	}
}