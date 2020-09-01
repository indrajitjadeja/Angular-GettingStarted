import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailsGuard } from './product-details.guard';
import { ConvertToSpaces } from '../shared/convert-to-spaces.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ConvertToSpaces
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'product/:id',
        canActivate: [ProductDetailsGuard],
        component: ProductDetailsComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
