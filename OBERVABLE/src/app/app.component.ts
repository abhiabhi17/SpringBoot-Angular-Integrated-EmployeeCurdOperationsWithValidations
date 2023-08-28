import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'OBERVABLE';
myObservable =new Observable((observer)=>{

setTimeout(() => {
  observer.next("1");
}, 1000);

setTimeout(() => {
  observer.next("2");
}, 2000);

//setTimeout(() => { observer.error(new Error("Somthing went wrong please try again later"))},3000);
   

setTimeout(() => {
  observer.next("3");
}, 3000);

setTimeout(() => {
  observer.next("4");
}, 4000);


setTimeout(() => {
  observer.complete()
}, 5000);

})
 
array1= [1,2,6,7,8];
array2=['A','B','C'];

//myObservable1=of(this.array1,this.array2);

myObservable1=from(this.array1);
transformbed=this.myObservable1.pipe(map((val)=>{
 return val*5;
}))
filtered= this.transformbed.pipe(filter((val1)=>{
  return val1>30;
}

))

  ngOnInit(): void {
    this.filtered.subscribe((val)=>{alert(val);},
                              (error)=>{alert(error.message)},
                              ()=>{alert("observable has complted all messgaes")})

                              
                              
  }
  
}
