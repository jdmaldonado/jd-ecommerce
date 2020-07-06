import { Action, createReducer, on, State } from '@ngrx/store';
import * as actions from './shopping-cart.actions';
import { ICartProduct } from 'src/app/models/cart-product.model';

export const SHOPPING_CART = 'shoppingCart';

export interface AppStateShoppingCart {
  shoppingCart: IShoppingCartState;
}


export interface IShoppingCartState {
  products: ICartProduct[];
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
  on(actions.loadShoppingCartFails, (state, error) => ({
    ...state,
    loading: false,
    error
  })),
  on(actions.addProduct, (state, { product }) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(actions.addProductSuccess, (state, { product }) => { 
    let { products } = state;
    const newProducts = [...products];
    const prodIndex = newProducts.findIndex(prod => prod._id === product._id);
    if (prodIndex !== -1) {
      newProducts[prodIndex] = product;
    } else {
      newProducts.push(product);
    }

    return {
      ...state,
      loading: false,
      products: [...newProducts],
      error: null
    }
  }),
  on(actions.addProductFails, (state, error) => ({
    ...state,
    loading: false,
    error
  })),
  on(actions.removeProduct, (state, { productId }) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(actions.removeProductSuccess, (state, { product }) => { 
    let { products } = state;
    const newProducts = [...products];
    const prodIndex = newProducts.findIndex(prod => prod._id === product._id);
    if (prodIndex !== -1) {
      newProducts[prodIndex] = product;
    } else {
      newProducts.push(product);
    }

    return {
      ...state,
      loading: false,
      products: [...newProducts],
      error: null
    }
  }),
  on(actions.removeProductFails, (state, error) => ({
    ...state,
    loading: false,
    error
  })),
  on(actions.resetCart, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(actions.resetCartSuccess, (state) => (shoppingCartInitialState)),
  on(actions.resetCartFails, (state, error) => ({
    ...state,
    loading: false,
    error
  })),
);

export function shoppingCartReducer(state, action: Action): IShoppingCartState {
  return _shoppingCartReducer(state, action);
}