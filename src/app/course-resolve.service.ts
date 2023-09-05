import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { CourseComponent } from "./course/course.component";
import { CoursesComponent } from "./courses/courses.component";
import { Injectable } from "@angular/core";

@Injectable()
export class CourseResolveService implements Resolve<any>
{


    //This is used to display courseslist ,when getall courses caleld after 5 seconds
    constructor(private coursesComponent:CoursesComponent){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   this.coursesComponent.getAllCourses().then((data:any)=>
   {
  return data;
   })
    }

}