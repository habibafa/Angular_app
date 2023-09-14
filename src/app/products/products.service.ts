import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, map } from "rxjs";
import { HttpHeaders } from "@angular/common/http";
import { Products } from "../model/products";

@Injectable()
export class ProductsService implements OnInit {
    url = 'http://localhost:3000/products';
    allProducts: Products[] =[]

    ngOnInit() {
        this.getAllData()
    }
    onProductsFetch() {
        this.getAllData()
    }
    constructor(private http: HttpClient) { }

    getAllProducts(): Observable<Products[]> {
        return this.http.get<{ [key: string]: Products }>(this.url).pipe(map((res) => {
            const products = [];
            for (const key in res) {
                if (res.hasOwnProperty(key)) {
                    products.push({ ...res[key], id: key });
                }
            }
            return products;
        }));
    }

    onProductsCreate(products: { pName: string, desc: string, price: string }) {
        console.log('in product service', products)
        const headers = new HttpHeaders({ 'myHeader': 'procademy' });
        this.http.post<{name:string}>(this.url, products, { headers: headers }).subscribe((res) => {
            console.log('check', res)

        })
    }
    private getAllData() {
        this.http.get<{ [key: string]: Products }>(this.url).pipe(map((res) => {
            const products = []
            for (const key in res) {
                if (res.hasOwnProperty(key)) {

                    products.push({ ...res[key], id: key })
                }
            }
            return products
        }))
            .subscribe((products) => {
                console.log('data is', products)
                this.allProducts = products
            })
    }
    // getProducts() {
    //     return [
    //         {
    //             id: 1,
    //             name: "Premium Red Sofa",
    //             color: "Red",
    //             available: "available",
    //             image: "../../assets/product.jpg",
    //         },
    //         {
    //             id: 2,
    //             name: "Ocean Blue Lounge Chair",
    //             color: "Blue",
    //             available: "not available",
    //             image: "../../assets/product.jpg",
    //         },
    //         {
    //             id: 3,
    //             name: "Elegant Pink Dining Table",
    //             color: "Pink",
    //             available: "available",
    //             image: "../../assets/product.jpg",
    //         },
    //         {
    //             id: 4,
    //             name: "Sunshine Yellow Hammock",
    //             color: "Yellow",
    //             available: "not available",
    //             image: "../../assets/product.jpg",
    //         },
    //         {
    //             id: 5,
    //             name: "Royal Purple Bed Frame",
    //             color: "Purple",
    //             available: "available",
    //             image: "../../assets/product.jpg",
    //         },
    //     ]
    // }
}