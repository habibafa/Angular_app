import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() numToPass:number = 0;
@Output() customEvent = new EventEmitter<string>();

sendEvent(){
  this.customEvent.emit('custom event data from child')
}
}
