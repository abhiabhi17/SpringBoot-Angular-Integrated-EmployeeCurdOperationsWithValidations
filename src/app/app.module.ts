import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './course/course.component';
import { FormsModule } from '@angular/forms';
import { CourseGuardService } from './course-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateCourseGuardService } from './candeactivate-guard.service';
import { CourseResolveService } from './course-resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    ErrorComponent,
    CourseComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CoursesComponent,
    CourseGuardService,
    AuthService
  ,CanDeactivateCourseGuardService,
CourseResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
