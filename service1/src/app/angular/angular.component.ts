import { Component, ViewEncapsulation } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  //providers :[EnrollService],
  encapsulation: ViewEncapsulation.None
})
export class AngularComponent {
  title='Angular Course';
  constructor(private enrollService:EnrollService){}
  Enroll()
  {
   
   this.enrollService.onErollClicked(this.title);
  }
}
