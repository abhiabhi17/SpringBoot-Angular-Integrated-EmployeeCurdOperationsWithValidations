import { Component,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
courses =[

{
  id:101,name:'java',author:'john',duration:48,type:'Free',price:400,description:'java book'
},
{
  id:102,name:'javascrpit',author:'edward',duration:38,type:'Free',price:200,description:'java scriptbook'
},
{
  id:103,name:'springboot',author:'michel',duration:98,type:'Premium',price:1000,description:'java spring book'
},
{
  id:104,name:'angular',author:'raj',duration:28,type:'Free',price:100,description:'angular book'
},
{
  id:105,name:'hiberante',author:'jen',duration:35,type:'Premium',price:320,description:'hibernate book'
}
]
getTotalCourses()
{
  return this.courses.length;
}
getTotalFreeCourses()
{
  return this.courses.filter(course=>course.type === 'Free').length;
}
getTotalPremiumCourses()
{
  return this.courses.filter(course=>course.type === 'Premium').length;
}
courseCountRadioButton:string='All';
onFilterRadioButtonChanged(data:string)
{
this.courseCountRadioButton=data;
}

searchText:string ='';

onSearchTextEntered(searchValue: string)
{
this.searchText=searchValue;
console.log(this.searchText);
}
}
