import { Component, OnInit, runInInjectionContext } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { AuthService } from './auth.service';
import {  Event,NavigationCancel,NavigationEnd,NavigationError,NavigationStart } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 displayLoadingIndicator=false;
  constructor(private authService:AuthService,
    private activatedRoute:ActivatedRoute,
    private router:Router){}
  title = 'AngularRouting1';

  ngOnInit(): void {
    
    //Retriving the fragment value
   this.activatedRoute.fragment.subscribe((value)=>
   {
this.jumpTo(value);
   });
 
// This code is for Navigation Events that When navigation starts loading the spinner
this.router.events.subscribe((routerEvent:Event)=>{
if(routerEvent instanceof NavigationStart){ this.displayLoadingIndicator=true;  }})
 
// If Navigation ends display of loading spinner should be set to false
if(RouterEvent instanceof NavigationEnd || RouterEvent instanceof NavigationCancel || RouterEvent instanceof NavigationError){this.displayLoadingIndicator=false;}
   



  }
 
  //Fragmentation jump to particular section
  jumpTo(section:any)
  {document.getElementById(section)?.scrollIntoView({behavior:'smooth'});  }




  //,When logged in courses  tab should be display after 5 seconds
  login()
  {alert("Logged in");this.authService.login();}
  

  // Wen logot courses should be displayed false
  logout()
  {alert("Logged out");this.authService.logout();}
  
    

}
