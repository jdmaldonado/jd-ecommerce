import { Component, OnInit } from '@angular/core';
/** Models */
import { IProduct } from 'src/app/models/product';
/** Services */
import { ProductService } from 'src/app/services/product.service';
/** Store */
import { Store, select } from '@ngrx/store';
import { SHOPPING_CART, AppState, ShoppingCartState } from 'src/app/store/shopping-cart/shopping-cart.reducers';
import { Observable } from 'rxjs';
import { addProduct } from 'src/app/store/shopping-cart/shopping-cart.actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: IProduct[];
  shoppingCart$: Observable<ShoppingCartState>;

  constructor(
    private store: Store<AppState>,
    private productService: ProductService,
  ) {
    this.shoppingCart$ = this.store.pipe(select(SHOPPING_CART));
  }

  ngOnInit(): void {
    this.getProducts();
    this.shoppingCart$.subscribe((data) => console.log(`data`, data))
  }

  async getProducts(): Promise<void> {
    this.products = await this.productService.getProducts();
  }

  addProductToCart(product: IProduct): void {
    this.store.dispatch(addProduct({ product, cant: 1 }))
  }

}
