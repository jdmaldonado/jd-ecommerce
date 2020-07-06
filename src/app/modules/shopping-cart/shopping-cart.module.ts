import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartStoreModule } from 'src/app/store/shopping-cart/shopping-cart-store.module';

@NgModule({
  declarations: [
    ShoppingCartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingCartStoreModule,
  ],
  exports: [
    ShoppingCartComponent,
  ]
})
export class ShoppingCartModule { }
