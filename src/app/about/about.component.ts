import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit{
 constructor(private route:Router,
             private activatedRoute:ActivatedRoute){}
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  navigateToHome()
  {
    //this.route.navigate(['Home']) //localhost:4200/Home
    this.route.navigate(['Home'],{relativeTo:this.activatedRoute});//localhosy:4200/About/Home
  }
}
