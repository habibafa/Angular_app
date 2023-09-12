import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
numToPass : number = 5;
receivedData: string = '';

  handleCustomEvent(data: string) {
    this.receivedData = data;
    console.log(this.receivedData)
  }
}
