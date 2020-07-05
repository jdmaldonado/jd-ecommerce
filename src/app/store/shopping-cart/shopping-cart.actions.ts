import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../models/product';


export const addProduct = createAction(
  '[Shopping Cart] Add Product',
  props<{ product: IProduct, cant: 1 }>()
);

export const removeProduct = createAction(
  '[Shopping Cart] Remove Product',
  props<{ product: IProduct }>()
);