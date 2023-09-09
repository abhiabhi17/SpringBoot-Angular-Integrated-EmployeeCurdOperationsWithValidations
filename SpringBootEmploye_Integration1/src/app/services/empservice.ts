import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { EmployeeModel } from "../model/employee.model";
import { Injectable } from "@angular/core";
import { catchError, map, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService
{
    constructor(private http:HttpClient){}
    //------------------------------save Employee to spring boot------------------------//
    saveEmployee(emp:EmployeeModel)// type is EmployeeModel
    {
        return this.http.post('http://localhost:8080/api/employees/save',emp,{responseType: 'text'}).subscribe((response)=>{console.log("EmployeeSaved") });
       //alert("save method called");
    }
//----------------------------------------Fetch employees from srping boot(Restapi curd operations)--------------//
    public fetchEmployees()
    {
        const header=new HttpHeaders()
        .set('content-type','application.json')
        .set('Access-control-Allow-origin','*');//setting headers and params
       
        const params=new HttpParams().set('print','pretty');//params to print the json pretty in response header

return this.http.get<{[key:string]:EmployeeModel}>('http://localhost:8080/api/employees/getAll',{'headers':header,params:params})
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
                 }),catchError((err)=>{
                    return throwError(err);
                 }))
    }
//----------------------------------------------------DELTE EMPLOYEE BY ID--------------------------//
    deleteEmployee(id:string)
    {
        // let header= new HttpHeaders();
        // header=header.append('myHeader1','value1');
        // header=header.append('myHeader2','Value2');//as headers are immutable we use let 
        
        return this.http.delete('http://localhost:8080/api/employees/delete/'+id,
        {responseType:'text'});
    }

    //------------------------------UPDATE EMPLOYE BY ID AND EMPLOYEMODEL---------------------------------//
    updateEmployee(id:string,value:EmployeeModel)
    {
        alert("update employee" +id);
        this.http.put('http://localhost:8080/api/employees/'+id,value).subscribe();
    }

    //--------------------------- Delete alll employees--------------------//
    deleteAllEmplpoyees()
    {
        this.http.delete('http://localhost:8080/api/employees/deleteAll').subscribe();
    }
}