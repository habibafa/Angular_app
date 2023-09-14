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
    // We ask the ProductsService to start getting the products.
    // But we don't know when the products will be ready.
    // So, we say, "When you're ready, let me know, and I'll do something with them."
    this._productService.getAllProducts().subscribe((products) => {
        // When the ProductsService says, "I have the products now," we do something with them.
        // We put the products in a variable called "products" in our component.
        this.products = products;
        // Then, we can use these products in our component, and they won't be undefined.
        console.log('products are ', this.products);
    });
}


}
