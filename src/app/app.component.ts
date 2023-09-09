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
  
}
