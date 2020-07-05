import { Action, createReducer, on, State } from '@ngrx/store';
import * as actions from './shopping-cart.actions';
import { IProduct } from '../../models/product';

export const SHOPPING_CART = 'shoppingCart';

export interface AppState {
  shoppingCart: ShoppingCartState;
}

interface IProductAdded {
  product: IProduct,
  cant: number
}

export interface ShoppingCartState {
  products: IProductAdded[];
}

export const shoppingCartInitialState: ShoppingCartState = {
  products: [
    {
      product: {
        id: 'product_default',
        name: `product name default`,
        description: `product description default`,
        price: Math.floor(Math.random() * 100000) + 10000,
        category: 'category default'
      },
      cant: 1
    }
  ],
};

const _shoppingCartReducer = createReducer(shoppingCartInitialState,
  on(actions.addProduct, (state, { product, cant }) => ({
    ...state,
    products: [...state.products, { product, cant }],
  })),
);

export function shoppingCartReducer(state, action: Action): ShoppingCartState {
  return _shoppingCartReducer(state, action);
}