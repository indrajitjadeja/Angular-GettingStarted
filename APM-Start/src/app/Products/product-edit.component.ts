import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from './product.service';
import { IProduct } from './product';

@Component({
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
  sub: Subscription;
  product: IProduct;
  errorMessage: any;

  constructor(private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = + params.get('id');
        this.getProductByIdById(id);
      }
    );
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getProductByIdById(id: number) {
    this.productService.getProductById(id).subscribe(
      {
        next: product => this.product = product,
        error: err => this.errorMessage = err
      }
    );
  }

}
