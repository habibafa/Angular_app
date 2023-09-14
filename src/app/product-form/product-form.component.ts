import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  url = 'http://localhost:3000/products';

  // onSubmit(){}

  constructor(private http: HttpClient) { }


  onProductsCreate(products: { name: string, color: string, available: string, price:number, image:'../../assets/product.jpg' }) {
    console.log('in product service', products)
    const headers = new HttpHeaders({ 'myHeader': 'procademy' });
    this.http.post<{ name: string }>(this.url, products, { headers: headers }).subscribe((res) => {
        console.log('check', res)

    })
}
}
