import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
@Injectable()
export class CoursesComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   courses=[


    {id:101, name : 'java',author:'john',duration:'300', type:'Free', price:'5000',description:'Java book'},
  
    {id:102, name : 'javaadvance',author:'michel',duration:'100', type:'Premium', price:'10000',description:'Java advancebook'},
    {id:103, name : 'spring',author:'danial',duration:'900', type:'Free', price:'1000',description:'Spring book'},
    {id:104, name : 'springboot',author:'smith',duration:'20', type:'Free', price:'500',description:'SpringBoot book'},
    {id:105, name : 'hiberante',author:'kelly',duration:'50', type:'Free', price:'2000',description:'Hibernate book'},
    {id:106, name : 'microservices',author:'john',duration:'300', type:'Premium', price:'5000',description:'microservies book'}
  


  ]
  //after 5 seconds corseseslist will be displayed when authservie(logged in is set to)true
  getAllCourses():any{
    const courseList=new Promise((resolve,reject)=>
    {
      setTimeout(() => {
        resolve(this.courses)
      }, 5000)
    });
    return courseList;
  }
  
}
