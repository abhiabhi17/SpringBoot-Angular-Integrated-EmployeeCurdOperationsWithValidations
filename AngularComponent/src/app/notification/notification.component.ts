import { Component, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert =success" [hidden]="displaynotification" [ngClass]="{fadeout : displaynotification}">  
                        This Website uses Cookies for Better Experience
              <div class= "close"><button class="btn" (click)="closeNotification()">X</button></div>
  
                </div>`,
                
  styles: ["div{margin: 10px 0px;padding : 10px 0px;background-color:red}", ".fadeout{visibility:hidden;opacity:0;transition:visibility 0s 2s;}"]
})
export class NotificationComponent {

  displaynotification:boolean = false;
  closeNotification()
  {
    this.displaynotification =true;
  }

}
