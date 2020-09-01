import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Router } from "@angular/router";

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpaces } from "./shared/convert-to-spaces.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductDetailsComponent } from './products/product-details.component';
import { ProductDetailsGuard } from './products/product-details.guard';
import { WelcomeComponent } from "./home/welcome.component";
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', 
      canActivate: [ProductDetailsGuard],
      component: ProductDetailsComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' } 
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
