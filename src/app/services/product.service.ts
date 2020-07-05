import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private getRamdomCategory() {
    const categories = ['category 1', 'category 2', 'category 3', 'category 4'];
    const index = Math.floor(Math.random() * 0) + categories.length - 1;
    return categories[index];
  }

  public getProducts(): Promise<IProduct[]> {
    let products: IProduct[] = Array.from(Array(10), (_, i) => ({
      id: `product_${i}`,
      name: `product name ${i}`,
      description: `product description ${i}`,
      price: Math.floor(Math.random() * 100000) + 10000,
      category: this.getRamdomCategory()
    }))


    return new Promise((resolve, reject) => {
      resolve(products);
    });
  }
}
