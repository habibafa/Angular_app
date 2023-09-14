import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, map } from "rxjs";
import { HttpHeaders } from "@angular/common/http";
import { Products } from "../model/products";

@Injectable()
export class ProductsService implements OnInit {
    url = 'http://localhost:3000/products';

    ngOnInit() {
        this.getAllData()
    }
    constructor(private http: HttpClient) { }

    onProductsCreate(products: { name: string, color: string, available: string, price:number }) {
        console.log('in product service', products)
        const headers = new HttpHeaders({ 'myHeader': 'procademy' });
        this.http.post<{ name: string }>(this.url, products, { headers: headers }).subscribe((res) => {
            console.log('check', res)

        })
    }
}