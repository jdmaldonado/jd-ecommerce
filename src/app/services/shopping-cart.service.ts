import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIResponse } from '../models/api.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IProduct } from '../models/product.model';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(
    private http: HttpClient,
  ) { }

  getCartProducts(): Observable<APIResponse> {
    const { api } = environment;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${api.token}`
      })
    };

    return this.http.get<APIResponse>(`${api.url}/shopping-cart`, httpOptions);
  }

  addProductToCart(product: IProduct): Observable<APIResponse> {
    const { api } = environment;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${api.token}`
      })
    };

    const body = { product };

    return this.http.post<APIResponse>(`${api.url}/shopping-cart`, body, httpOptions).pipe(take(1))
  }

  removeProduct(productId: string): Observable<APIResponse> {
    const { api } = environment;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${api.token}`
      })
    };

    return this.http.delete<APIResponse>(`${api.url}/shopping-cart/${productId}`, httpOptions);
  }
}
