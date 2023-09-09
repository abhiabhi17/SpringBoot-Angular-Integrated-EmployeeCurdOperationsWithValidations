import { HttpClient } from "@angular/common/http";
import { EmployeeModel } from "../model/employee.model";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService
{
    constructor(private http:HttpClient){}
    
    //-------------------Save Employee-------------------//
   
    saveEmployee(emp:EmployeeModel)
    {
        return this.http.post('http://localhost:8080/api/employees/save',emp,{responseType: 'text'}).subscribe((response)=>{console.log("EmployeeSaved") });
       alert("save method called");
    }

    //----------------------- FETCH EMPLOYESS (FROM SPRING BOOT----------------------//
    public fetchEmployees()
    {
return this.http.get<{[key:string]:EmployeeModel}>('http://localhost:8080/api/employees/getAll')
                 .pipe(map((res)=>{
                    const employees=[];
                    for(const key in res)
                    {
                        if(res.hasOwnProperty(key))
                        {
                            employees.push({...res[key]})
                        }
                       
                    }
                    return employees;
                 }))
    }

    //----------------------DELETE EMPLOYEES-------------------//
    deleteEmployee(id:string)
    {
        return this.http.delete('http://localhost:8080/api/employees/delete/'+id,{responseType:'text'});
    }


    //--------------------UPDATE EMPLOYEES------------------//
    updateEmployee(id:string,value:EmployeeModel)
    {
        alert("update employee" +id);
        this.http.put('http://localhost:8080/api/employees/'+id,value).subscribe();
    }


    //----------------------DELETE ALL EMPLOYEES-----------------//
    deleteAllEmplpoyees()
    {
        this.http.delete('http://localhost:8080/api/employees/deleteAll').subscribe();
    }
}