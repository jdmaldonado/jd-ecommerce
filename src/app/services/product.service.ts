import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIResponse } from '../models/api.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<APIResponse> {
    const { api } = environment;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${api.token}`
      })
    };

    return this.http.get<APIResponse>(`${api.url}/products`, httpOptions);
  }
}
