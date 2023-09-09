import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
=======
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './course/course.component';
import { CourseGuardService } from './course-guard.service';
import { CanDeactivateCourseGuardService } from './candeactivate-guard.service';
import { CourseResolveService } from './course-resolve.service';

const routes: Routes = [
  {path:'',component:HomeComponent},
  //{path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
 {path:'About',component:AboutComponent},
  {path:'Contact',canDeactivate:[CanDeactivateCourseGuardService],component:ContactComponent},
  // resove -courses will be displayed after settimeout functoion 
  {path:'Courses',component:CoursesComponent,resolve:{courses:CourseResolveService}},
  // {path:'Courses/Course/:id',component:CourseComponent},
  {path:'Courses', canActivateChild:[CourseGuardService],children:[
    {path:'Course/:id',component:CourseComponent},
  ]},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
>>>>>>> b7cb2553116fcf1b5473639c5fb6ac5a217720c1
  exports: [RouterModule]
})
export class AppRoutingModule { }
