import { Action, createReducer, on, State } from '@ngrx/store';
import * as actions from './products.actions';
import { IProduct } from '../../models/product.model';

export const PRODUCTS = 'products';

export interface AppStateWithProducts {
  products: IProductsState;
}

export interface IProductsState {
  products: IProduct[];
  loading: boolean;
  error?: any;
}

export const shoppingCartInitialState: IProductsState = {
  products: [],
  loading: false,
  error: null
};

const _productsReducer = createReducer(shoppingCartInitialState,
  on(actions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(actions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products,
    error: null
  })),
  on(actions.loadProductsFails, (state, error) => ({
    ...state,
    loading: false,
    error
  })),
);

export function productsReducer(state, action: Action): IProductsState {
  return _productsReducer(state, action);
}