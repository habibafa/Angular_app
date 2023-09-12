import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  // templateUrl: './notification.component.html',
  template: `
  
  <!-- <div class="alert alert-success" [hidden]="displayNotification" > -->

  <div class="alert alert-success" [ngClass]='{fadeOut : displayNotification}'>

  This website will diplay something, notifications etc
  <button class='btn' (click)='handleClose()'>Press</button>
  </div>`
  ,
  // styleUrls: ['./notification.component.css'],
  styles: [".fadeOut { visibility: hidden; opacity: 0;transition: visibility 0s 5s, opacity 5s linear;}"]
})
// can use styles: [] instead of styleUrls to add styles here
export class NotificationComponent {
  displayNotification: boolean = false

  handleClose() {
    this.displayNotification = true
  }
}
