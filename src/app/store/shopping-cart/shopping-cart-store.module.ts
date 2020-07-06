import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { shoppingCartReducer, SHOPPING_CART } from './shopping-cart.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingCartEffects } from './shopping-cart.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(SHOPPING_CART, shoppingCartReducer),
    EffectsModule.forFeature([ShoppingCartEffects])
  ]
})
export class ShoppingCartStoreModule { }
