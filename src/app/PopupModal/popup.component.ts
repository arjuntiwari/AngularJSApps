import { Component, OnInit, Inject,HostListener, ElementRef } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { LocalStorage } from '../StoreRoom/LocalStorage.service';
import { CookieService } from 'ngx-cookie-service';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';





@Component({
  selector: 'popup',
  templateUrl: './popup.html'
})
export class PopupComponent {
  
  clickoutHandler: Function;
  message: string = ""
  cancelButtonText = "Cancel"

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.clickoutHandler) {
      // var user = JSON.parse(JSON.stringify(this._localStorage.getFromLocal("user")|| null));
      var username = this._cookieService.get("username");
      if(username)
      {
        // console.log(user);
        window.location.reload();
      }
      console.log("Reload ni hua");
      // else if(username)
      // {
      //   window.location.reload();
      // }
      
    }
  }

  closeDialogFromClickout(event: MouseEvent) {
    const matDialogContainerEl = this.dialogRef.componentInstance.hostElement.nativeElement.parentElement;
    const rect = matDialogContainerEl.getBoundingClientRect()
    if(event.clientX <= rect.left || event.clientX >= rect.right || 
        event.clientY <= rect.top || event.clientY >= rect.bottom) {
      this.dialogRef.close();
    }
  }


  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<PopupComponent>, private authService: AuthService,public hostElement: ElementRef,private _localStorage: LocalStorage,private _cookieService: CookieService) {
    this.LoginPopUp(data);
  }

  onConfirmClick(): void {
    // console.log("tested onConfirmClick");
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.clickoutHandler = this.closeDialogFromClickout;
  }

  LoginPopUp(data: any): void {
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    this.dialogRef.updateSize('300vw', '300vw');    
  }
  

}