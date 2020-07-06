import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as actions from './shopping-cart.actions';
import { ShoppingCartService } from '../../services/shopping-cart.service';


@Injectable()
export class ShoppingCartEffects {

  constructor(
    private actions$: Actions,
    private shoppingCartService: ShoppingCartService,
  ) { }

  loadShoppingCart$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(actions.loadShoppingCart),
        mergeMap(
          () => this.shoppingCartService.getCartProducts()
            .pipe(
              map(({ data }) => actions.loadShoppingCartSuccess({ products: data })),
              catchError((error) => of(actions.loadShoppingCartFails(error)))
            )
        )
      )
  );

  addProduct$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(actions.addProduct),
        switchMap(
          ({ product }) => this.shoppingCartService.addProductToCart(product)
            .pipe(
              map(({ data }) => actions.addProductSuccess({ product: data })),
              catchError((error) => of(actions.addProductFails(error)))
            )
        )
      )
  );

  removeProduct$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(actions.removeProduct),
        switchMap(
          ({ productId }) => this.shoppingCartService.removeProduct(productId)
            .pipe(
              map(({ data }) => actions.removeProductSuccess({ product: data })),
              catchError((error) => of(actions.removeProductFails(error)))
            )
        )
      )
  );


}
