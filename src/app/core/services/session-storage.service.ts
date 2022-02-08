import {Injectable} from '@angular/core';
import {ProfileModel} from "../models/profile.model";

@Injectable({
    providedIn: 'root'
})
export class SessionStorageService {

    private static readonly TOKEN: string = 'token';
    private static readonly PROFILE: string = 'profile';

    constructor() {
    }

    static save(name: string, value: Object): void {
        sessionStorage.setItem(name, JSON.stringify(value));
    }

    static get(name: string): Object {
        const value = sessionStorage.getItem(name);
        return value ? JSON.parse(value) : null;
    }

    static remove(name: string): void {
        sessionStorage.removeItem(name);
    }

    static removeAll(): void {
        sessionStorage.clear();
    }

    static setToken(token: string): void {
        this.save(this.TOKEN, token);
    }

    static getToken(): string {
        return <string>this.get(this.TOKEN);
    }


    static setUser(body: Object): void {
        this.save(this.PROFILE, JSON.stringify(body));
    }

    static getUser(): Object {
        return <ProfileModel>this.get(this.PROFILE);
    }

    static isAuthenticated(): boolean {
        return !!this.getUser();
    }
}
