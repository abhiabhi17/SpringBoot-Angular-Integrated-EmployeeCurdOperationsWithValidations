import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [CoursesComponent]
})
export class CourseComponent implements OnInit ,OnDestroy{
  course:any;
  courseId: any;
  RouteParamObs:any;
  editMode:boolean=false;
  courses:any;
  constructor(private activatedRoute:ActivatedRoute,
           private courseService:CoursesComponent,
           private router:Router){}
 
  ngOnInit(): void {
  
    // this.courseId= this.activatedRoute.snapshot.paramMap.get('id');
    // this.course=this.courseService.courses.find(x=>x.id == this.courseId);
    this.RouteParamObs=this.activatedRoute.paramMap.subscribe((param)=>
    {
       this.courseId=param.get('id');
     this.course=this.courseService.courses.find(x=>x.id== this.courseId);

      // This is for resolve to get display all courses after settimeout called
    // this.courseService.getAllCourses().then((data: any)=>{this.courses=data})
   
    });
    this.activatedRoute.snapshot.data['courses'];
    //How to retrive query parameters from a route using snapshot and observable//
    this.activatedRoute.queryParamMap.subscribe((param)=>{ this.editMode=Boolean(param.get('edit'))})//convert to boolean
     
    
  }
 
 
  ngOnDestroy(): void { this.RouteParamObs.unsubscribe(); this.RouteParamObs.unsubscribe();
  }


  // This is for query parameters for course [ http://localhost:61976/Courses/Course/102?edit=true&value=course] and its editable//
  appendQueryParam()
  {
    this.router.navigate(['/Courses/Course',this.courseId],{queryParams :{edit:true,value:'course'}})
}


}
