import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './Coronavirus.service';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { LocalStorage } from '../StoreRoom/LocalStorage.service';
import { CookieService } from 'ngx-cookie-service';



@Component({
    selector: 'app-home',
    templateUrl: './Coronavirus.html',
    providers: [DataService, LocalStorage]
})

export class CoronavirusComponent implements OnInit {
        
    Loginname: string;
    today: number = Date.now();
    confirmed: String;
    recovered: String;
    deaths: String;
    active: String;
    deltaconfirmed: String;
    deltarecovered: String;
    deltadeaths: String;
    public values: any[];
    constructor(private _dataService: DataService,
        private _authService: AuthService,
        private _cookieService: CookieService, ) { }
    ngOnInit() {
        this.GetLoginName();

        this._dataService
            .GetAll()
            .subscribe(data => {
                this.values = data[0];
                this.confirmed = this.values["confirmed"];
                this.recovered = this.values["recovered"];
                this.deaths = this.values["deaths"];
                this.active = this.values["active"];
                this.deltaconfirmed = this.values["deltaconfirmed"];
                this.deltarecovered = this.values["deltarecovered"];
                this.deltadeaths = this.values["deltadeaths"];
                this.today = this.values["lastupdatedtime"];
                console.log(this.values["confirmed"])
            },
                error => console.log(error),
                () => console.log('Get all complete'));
    }

    GetLoginName(){
        var cookieusername  = this._cookieService.get("username")
        if(cookieusername){
            this.Loginname = cookieusername;
        }
    }

   
}