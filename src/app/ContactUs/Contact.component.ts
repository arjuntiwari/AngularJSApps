import { Component, ViewChild, ElementRef } from '@angular/core';
import { LocalStorage } from '../StoreRoom/LocalStorage.service';
import { UserComment } from '../SaveResponse/UserComment';
import { SocialUserService } from '../SaveResponse/SocialUser.service';
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-ContactUs',
  templateUrl: './Contact.component.html'
  // styleUrls: [ './Location.Component.css' ]
})
export class ContactComponent {

  constructor(
    private _localStorage: LocalStorage,
    private SocialloginService: SocialUserService,
    private _cookieService: CookieService,
    private _router: Router) {
  }

  @ViewChild('name', { static: true }) name: ElementRef;
  @ViewChild('email', { static: true }) email: ElementRef;
  @ViewChild('comments', { static: true }) comments: ElementRef;
  
  submit(): void {
    
    
    if (this.name.nativeElement.value && this.email.nativeElement.value && this.comments.nativeElement.value) {
      // var user = JSON.parse(JSON.stringify(this._localStorage.getFromLocal("user") || null));
      var cookieusername  = this._cookieService.get("username");
      if(cookieusername)
      {
        var commment = new UserComment();
        commment.name = this.name.nativeElement.value;
        commment.email = this.email.nativeElement.value;
        commment.comment = this.comments.nativeElement.value;
        commment.loginname = cookieusername;
        this.Savecomment(commment);
        this.name.nativeElement.remove();
        this.email.nativeElement.remove();
        this.comments.nativeElement.remove();
        alert("Thank you for Contact Us!");
      } 
      else {     
        this.name.nativeElement.remove();
        this.email.nativeElement.remove();
        this.comments.nativeElement.remove();
        alert("Please Login");
        
        
      }    
    }
    

    // let inputValue = this.name.nativeElement.value;
    // console.log(this.name.nativeElement.value);
    // console.log(this.form.value);
  }

  Savecomment(UserComment) {
    this.SocialloginService.Savecomment(UserComment).subscribe((res: any) => {
      debugger;
      console.log("Savecomment");
      //   localStorage.setItem('socialusers', JSON.stringify( this.socialusers));  
      //   console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));  
      //   this.router.navigate([`/Dashboard`]);  
    })
  }
}
