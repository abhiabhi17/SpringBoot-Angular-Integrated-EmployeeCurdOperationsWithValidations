import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  selectedCustomer: any;
  customers: Customer[] =[

{customerNo:1,name:'Mark',address: '',city:'London',country:'UK'},
{customerNo:2,name:'John',address: '',city:'Newyork',country:'USA'},
{customerNo:3,name:'Mary',address: '',city:'Derlin',country:'Germany'},
{customerNo:4,name:'Rahul',address: '',city:'Hyderabad',country:'India'},
{customerNo:5,name:'Rajesh',address: '',city:'Delhi',country:'India'}


  ]


}
