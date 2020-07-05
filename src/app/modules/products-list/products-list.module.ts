import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
/** Store */
import { ShoppingCartStoreModule } from '../../store/shopping-cart/shopping-cart-store.module';

@NgModule({
  declarations: [
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    ProductsListRoutingModule,
    ShoppingCartStoreModule,
  ]
})
export class ProductsListModule { }
