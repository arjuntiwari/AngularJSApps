import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService {
    private actionUrl: string;
    constructor(private _http: Http) {
        this.actionUrl = 'https://api.covid19india.org/data.json';
    }

    //public GetAll = (): Observable<any> => {
    //    const headerDict = {
    //        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
    //        'x-rapidapi-key': 'f477a50e92mshb4029a48e579bb7p1f26c6jsnf1332c5039cd',
    //        'Access-Control-Allow-Headers': 'Content-Type',
    //    }
    public GetAll = (): Observable<any> => {
        //const headerDict = {
        //    'Access-Control-Allow-Headers': 'Content-Type',
        //}



        //const requestOptions = {
        //    headers: new Headers(headerDict),
        //};
        // debugger;
        return this._http.get(this.actionUrl)
            .map((res: Response) => res.json().statewise);

    }
}
