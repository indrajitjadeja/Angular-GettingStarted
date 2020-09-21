import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = 'Product Details';
  product: IProduct | undefined;
  errorMessage: string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    const params = +this.route.snapshot.paramMap.get('id');
    if (params) {
      const id = +params;
      this.getProductById(id);
    }
  }

  getProductById(id: number): void {
    this.productService.getProductById(id).subscribe(
      {
        next: product => this.product = product,
        error: err => this.errorMessage = err
      }
    );
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
