import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as actions from './products.actions';
import { ProductService } from '../../services/product.service';


@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductService,
  ) { }

  loadProducts$ = createEffect(
    () => this.actions$
      .pipe(
        ofType(actions.loadProducts),
        mergeMap(
          () => this.productService.getAll()
            .pipe(
              map(({ data }) => actions.loadProductsSuccess({ products: data })),
              catchError((error) => of(actions.loadProductsFails(error)))
            )
        )
      )
  );


}
