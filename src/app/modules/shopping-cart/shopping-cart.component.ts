import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
/** Store */
import { AppStateShoppingCart, SHOPPING_CART, IShoppingCartState } from 'src/app/store/shopping-cart/shopping-cart.reducers';
import { addProduct, removeProduct, loadShoppingCart, resetCart } from 'src/app/store/shopping-cart/shopping-cart.actions';
import { ICartProduct } from 'src/app/models/cart-product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  public showPanel = false;
  shoppingCart$: Observable<IShoppingCartState>;

  constructor(
    private shoppingCartStore: Store<AppStateShoppingCart>,
  ) {
    this.shoppingCart$ = this.shoppingCartStore.pipe(select(SHOPPING_CART));
  }

  ngOnInit(): void {
    this.shoppingCartStore.dispatch(loadShoppingCart());
    this.shoppingCart$.subscribe((state) => {
      if (state.products.length) {
        this.openPanel();
      }
    });
  }

  openPanel(): void {
    this.showPanel = true;
  }

  closePanel(): void {
    this.showPanel = false;
  }

  add(cartProduct: ICartProduct): void {
    const { product } = cartProduct;
    this.shoppingCartStore.dispatch(addProduct({ product }))
  }

  remove(cartProduct: ICartProduct): void {
    const { product } = cartProduct;
    this.shoppingCartStore.dispatch(removeProduct({ productId: product._id }))
  }

  cleanCart(): void {
    this.shoppingCartStore.dispatch(resetCart());
  }

}
