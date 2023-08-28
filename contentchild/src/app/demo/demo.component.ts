import { AfterContentInit,Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,AfterContentInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterContentInit()
  {
    this.paragraphE1?.nativeElement.textContent;
 console.log(this.paragraphE1?.nativeElement.textContent);
  }
  @ContentChild('paragraph') paragraphE1:ElementRef | undefined;


  @Input()
  fromParent!: string;
}
