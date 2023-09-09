<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeModel } from './model/employee.model';
import { EmployeeService } from './services/empservice';

=======
import { Component, OnInit, runInInjectionContext } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { AuthService } from './auth.service';
import {  Event,NavigationCancel,NavigationEnd,NavigationError,NavigationStart } from '@angular/router';
>>>>>>> b7cb2553116fcf1b5473639c5fb6ac5a217720c1
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
<<<<<<< HEAD
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'SpringBootEmploye_Integration1';

  firstName:String;
  lastName:String;
  email:String;
  
  editMode:boolean=false;
  currentEmployeeId:string;
  
  @ViewChild('empForm') form:NgForm ;
   allemployees:EmployeeModel[]=[];
 constructor(private empService:EmployeeService){}

 //-----------------------SAVE Employe with type EmpModel-----------------//
   saveEmployee(emp: EmployeeModel)
  {
console.log(emp);
if(!this.editMode)
this.empService.saveEmployee(emp);
else
this.empService.updateEmployee(this.currentEmployeeId,emp);
this.form.setValue({
  firstName:'',
  lastName:'',
  email:''
})
  }

  //--------------------FETCH ALL EMPLOYEES-------------------//

  getAllEmployees() {
    alert("from app component--");
    this.empService.fetchEmployees()
    .subscribe((employees)=>{
       this.allemployees=employees;
    })
  
  }

  deleteEmployee(id:string)
  {
    this.empService.deleteEmployee(id).subscribe((res)=>{
               console.log(res);
    })
  }

  //----------------------------EDIT EMPLOYEE-----------------//
  onEditEmployee(id:string)
  {
   //Ge the current employee id
   let currentEmployee=this.allemployees.find((p)=>{return p.id===id});
   console.log(currentEmployee);

   //populate the form with employe id
   this.form.setValue(
    {
      firstName:currentEmployee.firstName, // reset the values after clicking submit
      lastName:currentEmployee.lastName,
      email:currentEmployee.email,
    }
   )
   this.editMode=true;   // make edit mode is true
  }



  //------------------- delete all employeess---------------------//
  deleteAllEmplpoyees()
  {
  this.empService.deleteAllEmplpoyees();
  }
  
=======
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
  
    

>>>>>>> b7cb2553116fcf1b5473639c5fb6ac5a217720c1
}
