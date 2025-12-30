import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CartItemData} from '../../data/cart-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  public getSavedCartsData(): Observable<CartItemData[]> {
    return this.httpClient.get('http://localhost:3020/api/cart/items') as Observable<CartItemData[]>;
  }
}
