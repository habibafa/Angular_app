import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: any = [];
  searchText: string = ''
  constructor(private _productService: ProductsService) {
  }

  onSearchTextEntered(searchText: string) {
    this.searchText = searchText;
    // console.log("onSearchTextEntered", this.searchText, arguments);
    console.log("onSearchTextEntered", this.searchText);
  }

  // ngOnInit() {
  //   // this.products = this._productService.getProducts();
  //   this.products = this._productService.onProductsFetch();
  //   console.log('products are ', this.products)
  // }

  ngOnInit() {
    this._productService.getAllProducts().subscribe((products) => {
      this.products = products;
      console.log('products are ', this.products);
    });}

}
