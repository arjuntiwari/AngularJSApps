import { Component, Inject, OnInit, Input } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PopupComponent } from './PopupModal/popup.component';
import { LocalStorage } from './StoreRoom/LocalStorage.service';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { Socialuser } from './SaveResponse/SocialUser';
import { SocialUserService } from './SaveResponse/SocialUser.service';
import { CookieService } from "ngx-cookie-service";

@Component({
    selector: 'menubar',
    templateUrl: './app.component.html',
    providers: [LocalStorage]
})

export class AppComponent implements OnInit {
    response;
    socialusers = new Socialuser();
    loggedIn: boolean;
    user: SocialUser
    name: string;
    photoUrl: string;
    displayElement: boolean;
    Logindisplayement : boolean;

    ngOnInit() {
        this.Logindisplayement = true;
        this.GetFbLoginLocalStorage();
        // var user = JSON.parse(JSON.stringify(this._localStorage.getFromLocal("user") || null));
        // // var user = JSON.parse(JSON.stringify(this._cookieService.get("coronaappuser") || null));
        // if (user) {
        //     this._cookieService.set("username", user.name);
        //     this._cookieService.set("userphoto", user.photoUrl);
        //     this._cookieService.set("useremail", user.email);

        //     this.name = user.name;
        //     this.photoUrl = user.photoUrl;
        //     this.displayElement = true;
        //     // console.log(this.photoUrl);

        // }
        // else {
        //     if (this._cookieService.get("username")) {
        //         this.name = this._cookieService.get("username");
        //         this.photoUrl = this._cookieService.get("userphoto");
        //         this.displayElement = true;
        //     }
        //     else {
        //         this.displayElement = false;
        //     }
        // }
        if(this._cookieService.get("username"))
        {
            this.SetUserProfile() ;
        }
    }

    constructor(private dialog: MatDialog,
        private snackBar: MatSnackBar,
        private _localStorage: LocalStorage,
        private SocialloginService: SocialUserService,
        private _authService: AuthService,
        private _cookieService: CookieService) {
    }


    openSignoutDialog() {
        // console.log("tested openSignoutDialog");
        this._authService.signOut().then().catch();
        this.Logindisplayement = true;
        localStorage.clear();
        this._cookieService.deleteAll();
        window.location.reload();
    }

    openAlertDialog() {
        // console.log("tested openAlertDialog");
        const dialogRef = this.dialog.open(PopupComponent, {
            data: {
                message: '',
                buttonText: {
                    cancel: 'Sign in with Facebook'
                }
            },
        });
    }

    public GetFbLoginLocalStorage(): void {
        debugger;
        if (localStorage.fbToken) {
            this.loggedIn = true;
            console.log(this.user);
        }
        this._authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
            if (user) {
                this.Savesresponse(user);
                this.SetCookiesValue(user);
            }

            // this._localStorage.storeOnLocalStorage("user", user);


            console.log(this.user);
        });

    }
    Savesresponse(socialusers: SocialUser) {
        this.SocialloginService.Savesresponse(socialusers).subscribe((res: any) => {
            debugger;
            console.log(res);
            this.socialusers = res;
            this.response = res.userDetail;
            //localStorage.setItem('socialusers', JSON.stringify( this.socialusers));  
            //   console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));  
            //   this.router.navigate([`/Dashboard`]);  
        })
    }
    SetCookiesValue(socialusers: SocialUser) {
        var user = JSON.parse(JSON.stringify(socialusers));
        this._cookieService.set("username", user.name);
        this._cookieService.set("userphoto", user.photoUrl);
        this._cookieService.set("useremail", user.email);
        console.log(user);
    }
    SetUserProfile() {
        this.name = this._cookieService.get("username");
        this.photoUrl = this._cookieService.get("userphoto");
        this.displayElement = true;
        this.Logindisplayement = false;
    }
}
