import { Injectable } from "@angular/core";

@Injectable()
export class ProductsService {
    constructor() { }

    getProducts() {
        return [
            {
                id: 1,
                name: "Premium Red Sofa",
                color: "Red",
                available: "available",
                image: "../../assets/product.jpg",
            },
            {
                id: 2,
                name: "Ocean Blue Lounge Chair",
                color: "Blue",
                available: "not available",
                image: "../../assets/product.jpg",
            },
            {
                id: 3,
                name: "Elegant Pink Dining Table",
                color: "Pink",
                available: "available",
                image: "../../assets/product.jpg",
            },
            {
                id: 4,
                name: "Sunshine Yellow Hammock",
                color: "Yellow",
                available: "not available",
                image: "../../assets/product.jpg",
            },
            {
                id: 5,
                name: "Royal Purple Bed Frame",
                color: "Purple",
                available: "available",
                image: "../../assets/product.jpg",
            },
        ]
    }
}