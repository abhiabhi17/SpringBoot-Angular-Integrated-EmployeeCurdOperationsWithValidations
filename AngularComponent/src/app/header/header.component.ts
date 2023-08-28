import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
heading:string='heading';
paragraph:string='posted by jon doe';
info:string='some information here';
paragraph1:string='Extra additional information';
}
