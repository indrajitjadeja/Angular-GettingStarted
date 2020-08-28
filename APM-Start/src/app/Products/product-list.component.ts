import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'
import { ProductService } from "./product.service";
@Component({
    selector: 'pm-productlist',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    errorMessage: string;

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLowerCase();
        return this.filteredProducts.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) != -1);
    }

    productTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    private _productFilter: string;
    public get productFilter(): string {
        return this._productFilter;
    }
    public set productFilter(value: string) {
        this._productFilter = value;
        this.filteredProducts = this._productFilter ? this.performFilter(this.productFilter) : this.products;
    }

    products: IProduct[];

    filteredProducts: IProduct[];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            {
                next: products => {
                    this.products = products;
                    this.filteredProducts = this.products;
                },
                error: error => this.errorMessage = error
            }
        );
    }

    constructor(private productService: ProductService) {

    }
}