import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductEditComponent } from './product-edit.component';

@Injectable({
  providedIn: 'root'
})
export class ProductEditGuard implements CanDeactivate<ProductEditComponent> {

  canDeactivate(component: ProductEditComponent): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }


}
