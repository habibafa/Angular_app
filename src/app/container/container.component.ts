import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  searchText: string = ''

  onSearchTextEntered(searchText: string) {
    this.searchText = searchText;
    // console.log("onSearchTextEntered", this.searchText, arguments);
    console.log("onSearchTextEntered", this.searchText);
  }
}
