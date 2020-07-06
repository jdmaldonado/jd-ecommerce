import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
/** Store */
import { ShoppingCartStoreModule } from '../../store/shopping-cart/shopping-cart-store.module';
import { ProductsStoreModule } from '../../store/products/products-store.module';
/** Shared Modules */
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    ProductsListRoutingModule,
    /** Shared Modules */
    PipesModule,
    /** Store */
    ShoppingCartStoreModule,
    ProductsStoreModule,
  ]
})
export class ProductsListModule { }
