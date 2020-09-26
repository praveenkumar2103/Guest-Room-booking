import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Headers {

	getHeaders() {
			return  new HttpHeaders({
					'Content-Type':  'application/json',
				});
	}

	getAuthHeaders() {
			return  new HttpHeaders({
					'Content-Type':  'application/json',
				})
	}

// 	getDashHeaders() {
// 		return  new HttpHeaders({
// 				'Content-Type':  'application/json',
// 			});
// }
}