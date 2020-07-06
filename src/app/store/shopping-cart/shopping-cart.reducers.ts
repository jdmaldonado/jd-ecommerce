import { Action, createReducer, on, State } from '@ngrx/store';
import * as actions from './shopping-cart.actions';
import { IProduct } from '../../models/product.model';

export const SHOPPING_CART = 'shoppingCart';

export interface AppStateShoppingCart {
  shoppingCart: IShoppingCartState;
}

export interface IProductAdded {
  id: string;
  product: IProduct,
  cant: number
}

export interface IShoppingCartState {
  products: IProductAdded[];
  loading: boolean;
  error?: any;
}

export const shoppingCartInitialState: IShoppingCartState = {
  products: [],
  loading: false,
  error: null
};

const _shoppingCartReducer = createReducer(shoppingCartInitialState,
  on(actions.loadShoppingCart, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(actions.loadShoppingCartSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products,
    error: null
  })),
  on(actions.loadShoppingCartSuccess, (state, error) => ({
    ...state,
    loading: false,
    error
  })),
);

export function shoppingCartReducer(state, action: Action): IShoppingCartState {
  return _shoppingCartReducer(state, action);
}