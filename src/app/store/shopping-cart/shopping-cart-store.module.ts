import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { shoppingCartReducer, SHOPPING_CART } from './shopping-cart.reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(SHOPPING_CART, shoppingCartReducer),
  ]
})
export class ShoppingCartStoreModule { }
