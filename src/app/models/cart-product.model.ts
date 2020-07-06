import { IProduct } from './product.model';

export interface ICartProduct {
  _id: string;
  product: IProduct;
  cant: number;
}
