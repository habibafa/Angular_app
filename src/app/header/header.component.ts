import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  brandLine: string = 'Your one stop shop for everything.'
  source: string = '/assets/shopping.jpg'

getBrandLine(){
  return 'NEW SLOGAN'
}
}
