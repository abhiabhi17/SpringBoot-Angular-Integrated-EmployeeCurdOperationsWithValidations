import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeModel } from './model/employee.model';
import { EmployeeService } from './services/empservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'SpringBootEmploye_Integration1';

  firstName:String; // firstname,lastname and email to access the ng form for reseting the values
  lastName:String;
  email:String;
  
  editMode:boolean=false;  // edit mode set to false ,if we want to edit then it wil set to be true later 
  currentEmployeeId:string;
  
  @ViewChild('empForm') form:NgForm ; // to access the empform n
   allemployees:EmployeeModel[]=[];
 constructor(private empService:EmployeeService){}

 //-----------------------SAVE Employe with type EmpModel-----------------//
   saveEmployee(emp: EmployeeModel)
  {
console.log(emp);
if(!this.editMode)  // if edit mode is false
this.empService.saveEmployee(emp);
else
this.empService.updateEmployee(this.currentEmployeeId,emp);//if edit mode is true
this.form.setValue({  // reset the values
  firstName:'',
  lastName:'',
  email:''
})
  }

  //--------------------FETCH ALL EMPLOYEES-------------------//

  getAllEmployees() {
    
    this.empService.fetchEmployees()
    .subscribe((employees)=>{
       this.allemployees=employees;
    })
  
  }
//------------------- DELETE EMPLOYE BASED ON ID---------------//
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
      firstName:currentEmployee.firstName,
      lastName:currentEmployee.lastName,
      email:currentEmployee.email,
    }
   )
   this.editMode=true; // here set edit mode to true [ in view template submit button change to 'update']
  }

  //--------------------------- DELETE ALL EMPLOYEES----------------//
  deleteAllEmplpoyees()
  {
  this.empService.deleteAllEmplpoyees();
  }
  
}
