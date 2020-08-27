import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'
@Component({
    selector: 'pm-productlist',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLowerCase();
        return this.filteredProducts.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) != -1);
    }

    productTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    private _productFilter: string = "cart";
    public get productFilter(): string {
        return this._productFilter;
    }
    public set productFilter(value: string) {
        this._productFilter = value;
        this.filteredProducts = this._productFilter ? this.performFilter(this.productFilter) : this.products;
    }

    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2019",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2019",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        },
    ];

    filteredProducts: IProduct[];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log("Method not implemented.");
    }

    constructor() {
        this.filteredProducts = this.products;
        this.productFilter = "cart";

    }
}