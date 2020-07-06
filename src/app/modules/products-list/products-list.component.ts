import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
/** Models */
import { IProduct } from 'src/app/models/product.model';
/** Store */
import { Store, select } from '@ngrx/store';
import { SHOPPING_CART, AppStateShoppingCart, IShoppingCartState } from 'src/app/store/shopping-cart/shopping-cart.reducers';
import { PRODUCTS, AppStateWithProducts, IProductsState } from 'src/app/store/products/products.reducers';
import { addProduct } from 'src/app/store/shopping-cart/shopping-cart.actions';
import { loadProducts } from 'src/app/store/products/products.actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: IProduct[];
  shoppingCart$: Observable<IShoppingCartState>;
  productsState$: Observable<IProductsState>;

  constructor(
    private shoppingCartStore: Store<AppStateShoppingCart>,
    private productsStore: Store<AppStateWithProducts>,
  ) {
    this.shoppingCart$ = this.shoppingCartStore.pipe(select(SHOPPING_CART));
    this.productsState$ = this.productsStore.pipe(select(PRODUCTS));
  }

  ngOnInit(): void {
    this.productsStore.dispatch(loadProducts());
  }

  // async getProducts(): Promise<void> {
  //   this.products = await this.productService.getProducts();
  // }

  // addProductToCart(product: IProduct): void {
  //   this.store.dispatch(addProduct({ product }))
  // }

}
