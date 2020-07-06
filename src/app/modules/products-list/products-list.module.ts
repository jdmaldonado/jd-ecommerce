import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
/** Store */
import { ShoppingCartStoreModule } from '../../store/shopping-cart/shopping-cart-store.module';
import { ProductsStoreModule } from '../../store/products/products-store.module';
/** Shared Modules */
import { PipesModule } from '../../pipes/pipes.module';
import { ShoppingCartModule } from '../../modules/shopping-cart/shopping-cart.module';

@NgModule({
  declarations: [
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    ProductsListRoutingModule,
    /** Shared Modules */
    PipesModule,
    ShoppingCartModule,
    /** Store */
    ShoppingCartStoreModule,
    ProductsStoreModule,
  ]
})
export class ProductsListModule { }
