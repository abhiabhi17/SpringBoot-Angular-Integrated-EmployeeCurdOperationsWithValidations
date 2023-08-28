import { Component, ViewEncapsulation } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
 //providers:[EnrollService],
  encapsulation:ViewEncapsulation.None
})
export class JavascriptComponent {
title="Java Script"
constructor(private enrollService:EnrollService){}

Enroll()
{
 
 this.enrollService.onErollClicked(this.title);
}
}
