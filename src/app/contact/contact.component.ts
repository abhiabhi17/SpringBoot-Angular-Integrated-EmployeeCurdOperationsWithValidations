import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  implements OnInit{
  firstName:any;
  lastName:any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
canExit()
{
  if(this.firstName || this.lastName )
  {
 return confirm("You have unsaved changes .Do You Really want to discard these changes?")
  }
  else{
    return true;
  }
}
}
