import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../models/product.model';

export const loadProducts = createAction(
  '[Products] Load Products',
)

export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: IProduct[] }>()
);

export const loadProductsFails = createAction(
  '[Products] Load Products ** Error **',
  props<{ error: any }>()
);