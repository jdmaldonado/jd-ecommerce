import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../models/product.model';
import { ICartProduct } from 'src/app/models/cart-product.model';


export const loadShoppingCart = createAction(
  '[Shopping Cart] Load Shopping Cart Products',
)

export const loadShoppingCartSuccess = createAction(
  '[Shopping Cart] Load Shopping Cart Success',
  props<{ products: ICartProduct[] }>()
);

export const loadShoppingCartFails = createAction(
  '[Shopping Cart] Load Shopping Cart Products ** Error **',
  props<{ error: any }>()
);

export const addProduct = createAction(
  '[Shopping Cart] Add Product',
  props<{ product: IProduct }>()
);

export const addProductSuccess = createAction(
  '[Shopping Cart] Add Product Success',
  props<{ product: ICartProduct }>()
);

export const addProductFails = createAction(
  '[Shopping Cart] Add Product ** Error **',
  props<{ error: any }>()
);

export const removeProduct = createAction(
  '[Shopping Cart] Remove Product',
  props<{ productId: string }>()
);

export const removeProductSuccess = createAction(
  '[Shopping Cart] Remove Product Success',
  props<{ product: ICartProduct }>()
);

export const removeProductFails = createAction(
  '[Shopping Cart] Remove Product ** Error **',
  props<{ error: any }>()
);