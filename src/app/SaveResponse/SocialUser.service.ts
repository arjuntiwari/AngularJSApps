import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
    providedIn: 'root'
})
export class SocialUserService {
    private actionUrl1: string;
    private actionUrl2: string;
    constructor(private _http: Http) {
        this.actionUrl1 = 'https://covid-19-update.azurewebsites.net/Api/Login/Saveresponse';
        this.actionUrl2 = 'https://covid-19-update.azurewebsites.net/Api/Login/Savecomment';
    }
    Savesresponse(response) {
        console.log("Savesresponse");
        return this._http.post(this.actionUrl1, response);
    }

    Savecomment(response1) { 
        console.log("Savecomment");       
        return this._http.post(this.actionUrl2, response1);
    }
}