import { Injectable } from '@angular/core';

const PREV = "prev";

@Injectable()
export class SessionStorage {

	constructor() { }

	public setKey(key : string, value: any) {
		window.sessionStorage.setItem(key, value);
	}

	public getKey(key : string) {
		return window.sessionStorage.getItem(key);
	}

	public isPrev() : boolean {
		return this.getKey(PREV) === "true";
	}

	public setPrev() {
		this.setKey(PREV, true);
	}

	public unsetPrev() {
		this.setKey(PREV, false);
	}
}