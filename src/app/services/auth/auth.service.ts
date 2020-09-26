import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { environment } from "../../../environments/environment"
import { Headers } from "../Headers";
import { UserStorage } from "../../storage/user-storage";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


	constructor(private  http : HttpClient,
				private headers : Headers,
				private userStorage: UserStorage) { }

	public loginUser(user): Observable<HttpResponse<any>> {

		return Observable.create(observer => {
			this.http.post<HttpResponse<any>>(environment.loginUrl, user, {
				observe: 'response',
				responseType: 'json',
				headers : this.headers.getHeaders()
			})
			.subscribe((resp : HttpResponse<any>) => {
				observer.next(resp);
				(<any>window).user = {user : 1, isAdmin: 1};
				this.userStorage.saveToken("hello");
				this.userStorage.saveUser((<any>window).user);
				observer.complete();
			},
			error => {
			  this.handleError(error);
			})
		});
	}

	public isUserLoggedIn(): Observable<HttpResponse<any>> {

		return Observable.create(observer => {
			this.http.post<HttpResponse<any>>(environment.userLoggedInUrl, {
				observe: 'response',
				responseType: 'json',
				headers : this.headers.getHeaders()
			})
			.subscribe((resp : HttpResponse<any>) => {
				observer.next(resp);
				// (<any>window).user = {user : 1, isAdmin: 1};
				// this.userStorage.saveToken("hello");
				// this.userStorage.saveUser((<any>window).user);
				observer.complete();
			})
		});
	}

	public registerOwner(user): Observable<HttpResponse<any>> {

		return Observable.create(observer => {
			this.http.post<HttpResponse<any>>(environment.registerUrl, user, {
				observe: 'response',
				responseType: 'json',
				headers : this.headers.getHeaders()
			})
			.subscribe((resp : HttpResponse<any>) => {
				observer.next(resp);
				(<any>window).user = {user : 1, isAdmin: 1};
				this.userStorage.saveToken("hello");
				this.userStorage.saveUser((<any>window).user);
				observer.complete();
			},
			error => {
			  this.handleError(error);
			})
		});
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
		// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error.message);
		} else {
		// The backend returned an unsuccessful response code.
		// The response body may contain clues as to what went wrong,
			console.error(
			  `Backend returned code ${error.status}, ` +
			  `body was: ${error.error}`);
		}
		// return an observable with a user-facing error message
		return throwError('Something bad happened; please try again later.');
	};
}
