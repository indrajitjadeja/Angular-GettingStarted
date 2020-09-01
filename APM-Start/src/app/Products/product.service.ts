import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl: string = "api/products/products.json"

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.HandleError)
    );
  }

  getProductById(id: number): Observable<IProduct> | undefined {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find(p => p.productId === id))
    );
  }

  private HandleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Error Occurred: ${err.error.message}`;
    }
    else { errorMessage = `Server returned code ${err.status}, error message is ${err.message}`; }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}