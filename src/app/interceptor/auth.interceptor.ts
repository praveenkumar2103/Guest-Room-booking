import { Injectable } from "@angular/core";
import { tap, catchError } from "rxjs/operators";
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpResponse,
	HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private router: Router) { }

	//function which will be called for all http calls
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		//how to update the request Parameters
		// const updatedRequest = request.clone({
		// 	headers: request.headers.set("Authorization", "")
		// });
		//logging the updated Parameters to browser's console
		return next.handle(request).pipe(
			catchError(
				(error: any, caught: Observable<HttpEvent<any>>) => {
					if (error.status === 401) {
						this.router.navigate(["/auth"]);
					}
					throw error;
				}
			),
		);
	}
}